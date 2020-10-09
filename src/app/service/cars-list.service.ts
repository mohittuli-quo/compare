import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsListService {

  carsUrl = '/api/carsList';
  carModels = [];
  selectedCars = [];

  constructor(private http: HttpClient) { }

  getCarsList(): Observable<any>{
    return this.http.get(this.carsUrl);
  }
  
  getCarsListById(id: any){
  
    let carList;
    this.getCarsList().subscribe(res => {
      carList = res;
      
      carList.filter(cars => {
        // debugger;
        this.carModels.push(cars.models);
       })

       this.carModels.forEach(cars => {
          //  debugger;
          cars.filter(car => {
            if(car.id === id[0] || car.id === id[1] || car.id === id[2] ){
             this.selectedCars.push(car);
              // console.log(this.selectedCars);
            }
          })
       })
    });


    return this.selectedCars;
    
  }
  

}
