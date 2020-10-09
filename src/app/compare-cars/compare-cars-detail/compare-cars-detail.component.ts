import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsListService } from 'src/app/service/cars-list.service';

@Component({
  selector: 'app-compare-cars-detail',
  templateUrl: './compare-cars-detail.component.html',
  styleUrls: ['./compare-cars-detail.component.scss']
})
export class CompareCarsDetailComponent implements OnInit {
  selectedCars:any;

  carsSelected:any;

  constructor(private route: ActivatedRoute, private carsListService: CarsListService ) { }

  ngOnInit(): void {

    // let id = this.route.snapshot.paraMap.get('filteredData')

    // const temCars = this.route.queryParamMap.subscribe(res => {
    //   // this.selectedCars = JSON.stringify(res);
    //   this.selectedCars = JSON.stringify(res);
    //   console.log(this.selectedCars);

    //       this.carsListService.getCarsList().subscribe(carId => {
    //           const modified = carId.map(comparisonResult => {
    //             comparisonResult.models = comparisonResult.models.filter(x => {
    //               if(x.id == this.selectedCars){
    //                 console.log(x.id)
    //               }

    //             })
    //           }) 
    //       })
    // })


    const temCars = JSON.parse(this.route.snapshot.queryParamMap.get("selectedCarsData"));

    // this.selectedCars = JSON.parse(temCars);
    // console.log(this.selectedCars);
 
   this.selectedCars =  this.carsListService.getCarsListById(temCars);
  //  console.log(finalResult);

}

}