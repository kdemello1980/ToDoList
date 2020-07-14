import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ICity } from '../cities/cities.component';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  /**
   * Create a service that returns an observable cities list.
   */
  getCities(): Observable<ICity[]>{
      // Define a http header
      const httpHead = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'  // allow cross origins, required for our api as hosted.
        })
      };
      return this.httpCli.get<ICity[]>('http://localhost:5000/cities',
        httpHead);
  }

  constructor(private httpCli: HttpClient ) { }
}
