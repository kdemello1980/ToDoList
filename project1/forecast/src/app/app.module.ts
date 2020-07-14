import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


/**
 * Material modules.
 */
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from "@angular/flex-layout";

/**
 * Components.
 */
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { ForecastComponent } from './forecast/forecast.component';
import { AddCityComponent } from './add-city/add-city.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitiesService } from './service/cities.service';
import { ForecastService } from './service/forecast.service';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    ForecastComponent,
    AddCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [CitiesService, ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
