import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CarList } from '../../model/car-list';

@Component({
  selector: 'app-compare-cars',
  templateUrl: './compare-cars.component.html',
  styleUrls: ['./compare-cars.component.scss'],
})
export class CompareCarsComponent implements OnInit {
  carsList = {
    cars: {
      brandName: 'maruti',
      models: [
        {
          carId: 100,
          name: 'baleno',
          mileage: '25',
          description:
            'Sigma Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
          'engine type': 'petrol',
          'fast charging': 'no',
          'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
          varient: ['Tour', 'Swift Tour', 'Tour Dzire'],
        },
        {
          id: 101,
          name: 'Swift',
          mileage: '28',
          description:
            'Swift Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
          'engine type': 'petrol',
          'fast charging': 'yes',
          'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
          varient: ['petrol', 'Diesel', 'VZI'],
        },
        {
          id: 102,
          name: 'alto',
          mileage: '23',
          description:
            'alto Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
          'engine type': 'petrol',
          'fast charging': 'no',
          'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
          varient: ['VXI', 'VDI', 'VZI'],
        },
        {
          id: 103,
          name: 'dzire',
          mileage: '25',
          description:
            'dzire Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
          'engine type': 'petrol',
          'fast charging': 'no',
          'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
          varient: ['Tour', 'Swift Tour', 'Tour Dzire'],
        },
      ],
    },
  }

  showTab:Boolean = false;
  selectcar: Boolean = false;

  tabLists: string[] = ['Carname', 'Carmodel'];
  selectTabLists = '';
  getCarModelArr = [
    { model: 'select Model', varient: 'Select Varient', img:'' },
    { model: 'select Model', varient: 'Select Varient', img:''},
    { model: 'select Model', varient: 'Select Varient', img:''},
  ];

  selectedCars=[];

  // getCarModelArr:CarList[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  selectCar(index) {
    // this.selectcar = true;
    this.showTab = index;
    this.selectTabLists = this.tabLists[0];
  }

  getCarsName(carModel, index) {
    const isExist = this.selectedCars.findIndex(c=>c.name==carModel.name);
    if(isExist!=-1){
      this.selectedCars = this.selectedCars.filter(x => x.name == carModel.name)
      alert("select Different Car. This Car is already selected");
      return this.selectedCars;
    }
    this.selectedCars.push(carModel);
    
    console.log("Selected cars:--" + JSON.stringify(this.selectedCars));




    this.getCarModelArr[index] = carModel;
    this.getCarModelArr[index].model = carModel.name;
    this.getCarModelArr[index].img = carModel.img;   

    // this.getCarModelArr[index].id = index;

    if (this.getCarModelArr[index].model) {
      this.selectTabLists = this.tabLists[1];
    }
  }

  getCarsVarient(carVarient, index) {
    this.getCarModelArr[index].varient = carVarient;
    this.showTab = false;
  }

  filteredData;

  compareCars(){
    this.filteredData = this.getCarModelArr;


    // this.router.navigate(['/compare-cars-details'], { queryParams: {carsId: JSON.stringify(this.getCarModelArr) }});
  }
}
