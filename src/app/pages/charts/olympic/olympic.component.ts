// Angular base module
import { Component, OnInit } from '@angular/core';
// Dynamic script loader
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';

@Component({
  selector: 'app-olympic',
  templateUrl: './olympic.component.html',
  styleUrls: ['./olympic.component.scss']
})
export class OlympicComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.loadScripts();
  }

  // load necessary scripts using dynamic loader service
  // all necessary scripts must be loaded in a specific order using promise
  private loadScripts() {
    this.dynamicScriptLoader.load('highcharts').then(data => {
      this.dynamicScriptLoader.load('streamgraph',).then(data => {
        this.dynamicScriptLoader.load('series-label').then(data => {
          this.dynamicScriptLoader.load('annotations').then(data => {
            this.dynamicScriptLoader.load('exporting').then(data => {
              this.dynamicScriptLoader.load('streamgraphDraw').then(data => {
              }).catch(error => console.log(error))
            }).catch(error => console.log(error))
          }).catch(error => console.log(error))
        }).catch(error => console.log(error))
      }).catch(error => console.log(error))
    }).catch(error => console.log(error))
  }

}
