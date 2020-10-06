import { Component, OnInit, OnDestroy} from '@angular/core';
import { CarsListService } from '../service/cars-list.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-compare-cars',
    templateUrl: './compare-cars.component.html',
    styleUrls: ['./compare-cars.component.scss'],
})
export class CompareCarsComponent implements OnInit, OnDestroy {
    carsList = [];
    varientMatch = [];
    carListSubscription: Subscription;
    selectedCars: any[] = [];
    showTab = false;
    filteredData: any[] = [];
    tabLists: string[] = ['Carname', 'Carmodel'];
    selectTabLists = '';
    getCarModelArr = [{
            model: 'select Model/Varient',
            varient: [{}],
            img: '',
            selectedVarient: []
        },
        {
            model: 'select Model/Varient',
            varient: [{}],
            img: '',
            selectedVarient: []
        },
        {
            model: 'select Model/Varient',
            varient: [{}],
            img: '',
            selectedVarient: []
        },
    ];

    constructor(private carsListService: CarsListService) {}


    ngOnInit(): void {
        this.getCarsListFromAPI();
    }

    getCarsListFromAPI(): void {
       this.carListSubscription = this.carsListService.getCarsList().subscribe(res => {
            this.carsList = res;
        });
    }

    selectCar(index): void {
        this.showTab = index;
        this.selectTabLists = this.tabLists[0];
    }

    getCarsName(carModel, index): void {

        this.getCarModelArr[index] = carModel;
        this.selectedCars[index] = this.getCarModelArr[index];

        this.getCarModelArr[index].model = carModel.name;
        this.getCarModelArr[index].img = carModel.img;

        if (this.getCarModelArr[index].model) {
            this.selectTabLists = this.tabLists[1];
        }
    }

    getCarsVarient(carVarient, index): void {
        this.getCarModelArr[index].selectedVarient = carVarient;
        console.log(this.getCarModelArr);
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
