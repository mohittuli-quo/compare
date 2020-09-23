import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CarsListService {
  
  selectedCarList=[];

  carsList = [   
    {
      carId: 100,
      name: 'baleno',
      mileage: '25',
      company: 'maruti',
      varient: 'petrol',
      description:
        'Sigma Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
      'engine type': 'petrol',
      'fast charging': 'no',
      'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
    //   varient: ['Tour', 'Swift Tour', 'Tour Dzire'],
    },
    {
      id: 101,
      name: 'Swift',
      mileage: '28',
      company: 'maruti',
      varient: 'petrol',
      description:
        'Swift Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
      'engine type': 'petrol',
      'fast charging': 'yes',
      'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
    //   varient: ['petrol', 'Diesel'],
    },
  ]
  
  constructor() { }

//   getCarsList(): Observable<any>{
//     return Observable.of(this.carsList);
//   }

}
