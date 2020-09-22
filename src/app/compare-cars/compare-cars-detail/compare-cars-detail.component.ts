import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-compare-cars-detail',
  templateUrl: './compare-cars-detail.component.html',
  styleUrls: ['./compare-cars-detail.component.scss']
})
export class CompareCarsDetailComponent implements OnInit {
  
  selectedCars:any;

  constructor(private route: ActivatedRoute) { 
     
  }

  ngOnInit(): void {

    // this.route.queryParams.subscribe(params => {
    //   console.log(params); 
    // });

    this.selectedCars = this.route.snapshot.queryParamMap.get("carsId");
    console.log(this.selectedCars);

      // this.order = this.route.snapshot.queryParamMap.get("carsId");
    

    // this.route.queryParams.filter(params => params.id)
    // .subscribe(params => {
    //   console.log(params); 
    // });
}

}
