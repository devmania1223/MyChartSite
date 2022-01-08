// Pages module to include all application pages and services
// Pages:
//  - Home page
//  - About page
// Services:
//  - Dynamic loader
// Modules:
//  - Charts Modules

// Base angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Application pages
import { HomeComponent } from './home/home.component';
import { ChartsModule } from './charts/charts.module';
import { AboutComponent } from './about/about.component';
// Dynamic script loader
import { DynamicScriptLoaderService } from '../services/dynamic-script-loader.service';

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  providers: [DynamicScriptLoaderService]
})
export class PagesModule { }
