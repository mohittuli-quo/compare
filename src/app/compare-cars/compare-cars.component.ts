import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CarsListService } from '../service/cars-list.service';


@Component({
selector: 'app-compare-cars',
templateUrl: './compare-cars.component.html',
styleUrls: ['./compare-cars.component.scss'],
})
export class CompareCarsComponent implements OnInit {
carsList = [];
varientMatch=[];

selectedCars:any[] = [];
showTab:Boolean = false;
selectcar: Boolean = false;

tabLists: string[] = ['Carname', 'Carmodel'];
selectTabLists = '';
getCarModelArr = [
  { model: 'select Model/Varient', varient: ['select Model/Varient'], img:'' },
  { model: 'select Model/Varient', varient: ['select Model/Varient'], img:''},
  { model: 'select Model/Varient', varient: ['select Model/Varient'], img:''},
];

constructor(private carsListService: CarsListService) {}



  ngOnInit() {
    this.getCarsListFromAPI();
    }
   
  getCarsListFromAPI() {
  this.carsListService.getCarsList().subscribe(res => {
  this.carsList = res;
  })
  }


selectCar(index) {
this.showTab = index;
this.selectTabLists = this.tabLists[0];
}

getCarsName(carModel, index) {

// const isExist = this.selectedCars.findIndex(c=>c.name==carModel.name);
// if(isExist!=-1){
// this.selectedCars = this.selectedCars.filter(x => x.name == carModel.name)
// return;
// }
// else{ 
// this.getCarModelArr[index] = carModel;
// this.selectedCars[index] = this.getCarModelArr[index];
// console.log(this.selectedCars); 
// } 
this.getCarModelArr[index] = carModel;
this.selectedCars[index] = this.getCarModelArr[index];
// console.log(this.selectedCars); 

this.getCarModelArr[index].model = carModel.name;
this.getCarModelArr[index].img = carModel.img; 

if (this.getCarModelArr[index].model) {
this.selectTabLists = this.tabLists[1];
}
}

getCarsVarient(carVarient, index) {
this.getCarModelArr[index].varient[index] = carVarient;
this.getCarModelArr[index] = this.getCarModelArr[index];
// console.log(this.getCarModelArr);
this.showTab = false;
}

filteredData:any[]=[];

compareCars(){
this.filteredData = this.selectedCars;
console.log(this.filteredData);
if(this.filteredData.length<=1){
alert("Please select at least 2 cars");
}else{
this.filteredData = this.selectedCars;
}

}
}