import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForecastService } from '../service/forecast.service';
import { Subscription } from 'rxjs';

export interface IDailyWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IDaily {
  dt: any;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: IDailyWeather[];
  clouds: number;
  rain: number;
  uvi: number;
  }

export interface IForecast {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: {
      dt: number;
      sunrise: number;
      sunset: number;
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
      dew_point: number;
      uvi: number;
      clouds: number;
      visibility: number;
      wind_speed: number;
      wind_degree: number;
    };
    daily: IDaily[];
}

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  curForecast: IForecast;

  lat = (function(){
    let lat = 42.654;
    return function(l?: number){
      if (l){
        lat = l;
      }
      return lat;
    }
  })();
  lon = (function(){
    let long = -73.748;
    return function(l?: number){
      if (l){
        long = l;
      }
      return long;
    }
  })();

  // lat = 34.75;
  // lon = -92.28;
  city: string;
  date: string;
  // params: Subscription;

  constructor(private route: ActivatedRoute, private forecast: ForecastService) { }

  /**
   * Observable might not be the correct choice here.  We're triggering changes, 
   * not passively waiting form them to happen.
   */
  getForecastOpenWeather(): void {
    this.forecast.getForecast(this.lat(), this.lon()).subscribe(
      response => {
        console.log(response);
        this.curForecast = response;
        for (let t of this.curForecast.daily){
          t.dt = this.timeConverter(t.dt);
          t.weather[0].icon = `../../assets/icons/${t.weather[0].icon}.png`;
        }
      }
    );
  }


  ngOnInit(): void {
    const params = this.route.snapshot['queryParams'];
    if (params['lat']){
      this.lat(params['lat']);
    }
    if (params['lon']){
      this.lon(params['lon']);
    }
    this.city = params['city'];
    console.log(params);
    this.getForecastOpenWeather();
  }

  /**
   * This is betterdone with a pipe.
   * 
   * @param UNIX_timestamp 
   */
  timeConverter(UNIX_timestamp: number): string{
    const a = new Date(UNIX_timestamp * 1000);
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const month = months[a.getMonth()];
    const date = a.getDate();
    const time = month + ' ' + date;
    return time;
}

}
