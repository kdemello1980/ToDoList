import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitiesService } from '../service/cities.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ForecastComponent } from '../forecast/forecast.component';
import { ForecastService } from '../service/forecast.service';


export interface ICity {
  city: string;
  id: number;
  latitude: number;
  longitude: number;
  state: string;
  zip: string;
}

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  allCities: ICity[];

  displayedColumns: string[] = ['state', 'city', 'zip'];

  constructor(private route: ActivatedRoute, private cities: CitiesService, private router: Router) { }

  /**
   * I need something in here that subscribes to my observer in my cities.service.ts
   */
  getAllCities(): void {
    this.cities.getCities().subscribe(
      response => {
        // console.log(response[0].state);

        this.allCities = response;
        // console.log(this.allCities.length);
      }
    );
  }

  onCityClicked(city: ICity): void {
    console.log(`${city.city}: ${city.latitude}, ${city.longitude}`);
    this.router.navigate(['/forecast'], {queryParams: {lat: city.latitude, lon: city.longitude, city: city.city}});
    // this.forecast.getForecast(city.latitude, city.longitude);
  }

  /**
   * Pull all cities from the database when this component is initialized.
   */
  ngOnInit(): void {
    this.getAllCities();
  }

}
