// Angular base module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Pages (or component is the same) to include in routes
import { HomeComponent } from './pages/home/home.component';
import { OlympicComponent } from './pages/charts/olympic/olympic.component';
import { MarathonComponent } from './pages/charts/marathon/marathon.component';
import { PopulationComponent } from './pages/charts/population/population.component';
import { MortalityComponent } from './pages/charts/mortality/mortality.component';
import { AllComponent } from './pages/charts/all/all.component';
import { AboutComponent } from './pages/about/about.component';

// routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chart', children: [
    { path: 'olympic',component: OlympicComponent },
    { path: 'marathon',component: MarathonComponent },
    { path: 'population',component: PopulationComponent },
    { path: 'mortality',component: MortalityComponent },
    { path: 'all',component: AllComponent },
  ]},
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }