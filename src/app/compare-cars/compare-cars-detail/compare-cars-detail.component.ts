import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { filter } from "rxjs/operators";
import { CarsListService } from 'src/app/service/cars-list.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-compare-cars-detail',
  templateUrl: './compare-cars-detail.component.html',
  styleUrls: ['./compare-cars-detail.component.scss']
})
export class CompareCarsDetailComponent implements OnInit {
  
  selectedCars;

  constructor(public carsListService:CarsListService, private route:ActivatedRoute) { 
     
  }

  ngOnInit(): void {

    this.selectedCars = this.route.snapshot.queryParamMap.get("carsId");
    console.log(JSON.parse(this.selectedCars)); 
  }

}
