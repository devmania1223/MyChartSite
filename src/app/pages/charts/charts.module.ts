// Charts Module including all charts components (charts pages) and services
// Charts:
//  - Olympic graph
//  - Marathon graph
//  - Population graph
//  - Mortality graph
//  - All graph page
// Services:
//  - Dynamic script loader

// Base Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Dynamic loader service
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';
// Chart pages component
import { OlympicComponent } from './olympic/olympic.component';
import { MarathonComponent } from './marathon/marathon.component';
import { PopulationComponent } from './population/population.component';
import { MortalityComponent } from './mortality/mortality.component';
import { AllComponent } from './all/all.component';
// Chart module and highcharts modules 
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as heatmap from 'highcharts/modules/heatmap.src';
import * as treemap from 'highcharts/modules/treemap.src';

@NgModule({
  declarations: [OlympicComponent, MarathonComponent, PopulationComponent, MortalityComponent, AllComponent],
  imports: [
    CommonModule,
    ChartModule
  ],
  providers: [
    DynamicScriptLoaderService,
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ 
      treemap, 
      heatmap, 
    ] }
  ]
})
export class ChartsModule { }

