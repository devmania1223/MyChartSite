// Base angualar modules
import { Component, OnInit } from '@angular/core';
// Dynamic script loader
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';

@Component({
  selector: 'app-marathon',
  templateUrl: './marathon.component.html',
  styleUrls: ['./marathon.component.scss']
})
export class MarathonComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.loadScripts();
  }

  chargingSize: number;

  // load necessary scripts using dynamic loader service
  // all necessary scripts must be loaded in a specific order using promise
  private loadScripts() {
    this.chargingSize = 0;
    this.dynamicScriptLoader.load('highcharts').then(data => { this.chargingSize = 33;
      this.dynamicScriptLoader.load('parallel-axes',).then(data => { this.chargingSize = 65;
        this.dynamicScriptLoader.load('spline').then(data => { this.chargingSize = 100;
        }).catch(error => console.log(error))
      }).catch(error => console.log(error))
    }).catch(error => console.log(error))
  }
}
