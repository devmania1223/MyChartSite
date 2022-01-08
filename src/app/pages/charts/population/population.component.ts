// Angular base module
import { Component, OnInit } from '@angular/core';
// Dynamic script loader
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.loadScripts();
  }

  // load necessary scripts using dynamic loader service
  // all necessary scripts must be loaded in a specific order using promise
  private loadScripts() {
    this.dynamicScriptLoader.load('highcharts').then(data => {
      this.dynamicScriptLoader.load('sunburst',).then(data => {
        this.dynamicScriptLoader.load('exporting').then(data => {
          this.dynamicScriptLoader.load('sunburstDraw').then(data => {
          }).catch(error => console.log(error))
        }).catch(error => console.log(error))
      }).catch(error => console.log(error))
    }).catch(error => console.log(error))
  }

}
