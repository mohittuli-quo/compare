import { Component, OnInit, OnDestroy} from '@angular/core';
import { CarsListService } from '../service/cars-list.service';
import { Subscription } from 'rxjs';
import { CarsCompareList } from '../utils/constants'


@Component({
    selector: 'app-compare-cars',
    templateUrl: './compare-cars.component.html',
    styleUrls: ['./compare-cars.component.scss'],
})
export class CompareCarsComponent implements OnInit, OnDestroy {
    carsList = [];
    carListSubscription: Subscription;
    selectedCars: any[] = [];
    showTab = false;
    filteredData: any[] = [];
    tabLists: string[] = ['Carname', 'Carmodel'];
    selectTabLists = '';
    getCarModelArr = CarsCompareList;
    tabDisabled: boolean = false;


    constructor(private carsListService: CarsListService) {}


    ngOnInit(): void {
        this.getCarsListFromAPI();
    }

     // Get Car data from Service
    getCarsListFromAPI(): void {
       this.carListSubscription = this.carsListService.getCarsList().subscribe(res => {
            this.carsList = res;
        });
    }

    //TabList Array and Default Selected tab
    selectCar(index): void {
        this.showTab = index;
        this.selectTabLists = this.tabLists[0];
    }

    //get Car Model Array
    getCarsName(carModel, index): void {

        this.getCarModelArr[index] = carModel;
        this.selectedCars[index] = this.getCarModelArr[index];

        this.getCarModelArr[index].model = carModel.name;
        this.getCarModelArr[index].img = carModel.img;

            //After Car Model selected
        if (this.getCarModelArr[index].model) {
            this.tabDisabled = true;
            this.selectTabLists = this.tabLists[1];
         }
    }

    //get Car Varient selected    
    getCarsVarient(carVarient, index): void {
        this.getCarModelArr[index].selectedVarient = carVarient;
        this.showTab = false;
    }

    compareCars(): void {
        this.filteredData = this.selectedCars;

        if (this.filteredData.length <= 1) {
            alert('Please select at least 2 cars');
        }
    }

    ngOnDestroy(): void{
        console.log('Ng Destroy Called');
        this.carListSubscription.unsubscribe();
    }
}
