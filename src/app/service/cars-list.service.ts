// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';

// @Injectable({
//   providedIn: 'root'
// })
// export class CarsListService {
//   carsList = {
//     cars: [{
//       brandName: 'maruti',
//       models: [
//         {
//           id: 100,
//           name: 'baleno',
//           mileage: '25',
//           description:
//             'Sigma Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
//           'engine type': 'petrol',
//           'fast charging': 'no',
//           'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
//           varient: [
//             {
//               petrol: ['sigma', 'delta'],
//               diesel: 'delta',
//             },
//           ],
//         },
//         {
//           id: 101,
//           name: 'Swift',
//           mileage: '28',
//           description:
//             'Swift Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
//           'engine type': 'petrol',
//           'fast charging': 'yes',
//           'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
//           varient: ['VXI', 'VDI', 'VZI'],
//         },
//         {
//           id: 102,
//           name: 'alto',
//           mileage: '23',
//           description:
//             'alto Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
//           'engine type': 'petrol',
//           'fast charging': 'no',
//           'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
//           varient: ['VXI', 'VDI', 'VZI'],
//         },
//         {
//           id: 103,
//           name: 'dzire',
//           mileage: '25',
//           description:
//             'dzire Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
//           'engine type': 'petrol',
//           'fast charging': 'no',
//           'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
//           varient: ['Tour', 'Swift Tour', 'Tour Dzire'],
//         },
//       ],
//     }],
//   }



//   constructor() { }


//   getCarsList(): Observable<any>{
//     return Observable.of(this.carsList);
//   }
//   // getCarById(id: string):Observable<any>{
//   //   return this.getCarsList().map(cars => cars.find(car => car.id == id) )
//   // }

// }
