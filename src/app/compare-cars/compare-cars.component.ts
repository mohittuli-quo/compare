import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


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
          id: 100,
          name: 'baleno',
          mileage: '25',
          description:
            'Sigma Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
          'engine type': 'petrol',
          'fast charging': 'no',
          'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
          varient: [
            {
              petrol: ['sigma', 'delta'],
              diesel: 'delta',
            },
          ],
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
          varient: ['VXI', 'VDI', 'VZI'],
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

  showTab;
  selectcar: Boolean = false;

  tabLists: string[] = ['Carname', 'Carmodel'];
  selectTabLists = '';
  getCarModelArr = [
    { id: 0, model: 'select Model', varient: 'select varient', img:'' },
    { id: 1, model: 'select Model', varient: 'select varient', img:''},
    { id: 2, model: 'select Model', varient: 'select varient', img:''},
  ];

  carId;

  constructor(private router: Router) {}

  ngOnInit() {}

  selectCar(index) {
    // this.selectcar = true;
    this.showTab = index;
    this.selectTabLists = this.tabLists[0];
  }

  getCarsName(carModel, index, img, id) {
    this.carId = id;
    this.getCarModelArr[index].model = carModel;
    this.getCarModelArr[index].img = img;   


    if (this.getCarModelArr[index].model) {
      this.selectTabLists = this.tabLists[1];
    }
  }

  getCarsVarient(carVarient, index) {
    this.getCarModelArr[index].varient = carVarient;
    this.showTab = false;
  }

  // carsId:any;
  compareCars(){
  
  this.router.navigate(['/compare-cars-details'], { queryParams: {carsId: JSON.stringify(this.getCarModelArr) }});
  // console.log(this.getCarModelArr);
  }
}
