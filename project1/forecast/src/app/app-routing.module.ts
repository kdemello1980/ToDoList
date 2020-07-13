import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CitiesComponent } from './cities/cities.component';
import { ForecastComponent } from './forecast/forecast.component';
import { AddCityComponent } from './add-city/add-city.component';


const routes: Routes = [
  {path: '', redirectTo: '/cities', pathMatch: 'full'},
  {path: 'cities', component: CitiesComponent},
  {path: 'forecast', component: ForecastComponent},
  {path: 'add-city', component: AddCityComponent},
  {path: '**', redirectTo: '/cities'}
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
