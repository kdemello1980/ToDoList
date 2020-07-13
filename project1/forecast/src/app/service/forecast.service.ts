import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IForecast } from '../forecast/forecast.component';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  getForecast(lat: number, lon: number): Observable<IForecast>{
    // Define a http header
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',  // allow cross origins, required for our api as hosted.
      })
    };
    return this.httpCli.get<IForecast>(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=63d7dbcf918332e3cd1364cb169bd101&units=imperial`, httpHead);
    // return this.httpCli.get<IForecast>(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=63d7dbcf918332e3cd1364cb169bd101&units=imperial`, httpHead);
}

  constructor(private httpCli: HttpClient) { }

}
