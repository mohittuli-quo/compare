import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsListService } from 'src/app/service/cars-list.service';

@Component({
  selector: 'app-compare-cars-detail',
  templateUrl: './compare-cars-detail.component.html',
  styleUrls: ['./compare-cars-detail.component.scss']
})
export class CompareCarsDetailComponent implements OnInit {
  selectedCars:any;

  carsSelected:any;

  constructor(private route: ActivatedRoute, private carsListService: CarsListService, private _router: Router ) { }

  ngOnInit(): void {
    this.selectedCars = JSON.parse(this.route.snapshot.queryParamMap.get("selectedCarsData"));
      console.log(this.selectedCars);
    // this.selectedCars =  this.carsListService.getCarsListById(temCars);

  }

  backNavigation(){
    this._router.navigate(['/compare-cars']);
  }

  //   ngOnInit(): void {
//     const temCars = JSON.parse(this.route.snapshot.queryParamMap.get("selectedCarsData"));
//     this.selectedCars =  this.carsListService.getCarsListById(temCars);
// }

}