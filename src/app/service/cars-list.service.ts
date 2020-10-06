import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map'
// import {InMemCarsData} from '../api/carsData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsListService {

  carsUrl = '/api/carsList';

  constructor(private http: HttpClient) { }

  getCarsList(): Observable<any>{
    return this.http.get(this.carsUrl);
  }

}
