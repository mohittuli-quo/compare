
import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemCarsData implements InMemoryDbService {
  createDb() {
    let carsListAPI =
    [    
      {
        brandName: 'maruti',
        models: [
          {
            id: 100,
            name: 'baleno',
            mileage: '25',
            description: 'Sigma Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
            img: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'F8D Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '796'},
              { label : 'Max Power (bhp@rpm)', maxpower: '81.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '69Nm@3500rpm' },
            ],
            
            'fuel-performance': [
                { label:'Fuel & Performance', fueltype: 'petrol'},
                { label:'Mileage (City)', mileagecity: '18'},
                { label:'Mileage(ARAI)', mileage: '37' },
                { label: 'Fuel Tank Capacity (Litres)', fuelSize: '35' },
              ],
              
              'dimensions-capacity': [
                { label: 'Length (mm)', length : '3995'},
                { label: 'Width (mm)', width: '1745'},
                { label: 'Height (mm)', height: '1510' },
                { label: 'Ground Clearance Unladen (mm)',  groundClearance : '170'}
              ],
              
            varient: ['Tour', 'Swift Tour', 'Tour Dzire'],
          },
          {
            id: 101,
            name: 'Swift',
            mileage: '28',
            description:
              'Swift Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
            charging: 'yes',
            'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'F8D Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '796'},
              { label : 'Max Power (bhp@rpm)', maxpower: '81.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '69Nm@3500rpm' },
            ],
            'fuel-performance': [
              { label :'Fuel & Performance',  fueltype : 'petrol'},
              { label :'Fuel & Performance',  mileageCity : '18'},
              { label :'Fuel & Performance',  mileage : '37' },
              { label: 'Fuel Tank Capacity (Litres)', fuelSize: '32' }
            ],
            'dimensions-capacity': [
              { label: 'Length (mm)', length : '3995'},
              { label: 'Width (mm)', width: '1745'},
              { label: 'Height (mm)', height: '1510' },
              { label: 'Ground Clearance Unladen (mm)',  groundClearance : '170'}
            ],
            varient: ['petrol', 'Diesel', 'VZI'],
          },
          {
            id: 102,
            name: 'alto',
            mileage: '23',
            description:
              'alto Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
            charging: 'no',
            'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'F8D Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '796'},
              { label : 'Max Power (bhp@rpm)', maxpower: '81.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '69Nm@3500rpm' },
            ],
            'fuel-performance': [
              { label :'Fuel & Performance',  fueltype : 'petrol'},
              { label :'Fuel & Performance',  mileagecity : '18'},
              { label :'Fuel & Performance',  mileage : '37' },
              { label: 'Fuel Tank Capacity (Litres)', fuelSize: '35' }
            ],
            'dimensions-capacity': [
              { label: 'Length (mm)', length : '3995'},
              { label: 'Width (mm)', width: '1745'},
              { label: 'Height (mm)', height: '1510' },
              { label: 'Ground Clearance Unladen (mm)',  groundClearance : '170'}
            ],
            varient: ['VXI', 'VDI', 'VZI'],
          },
          {
            id: 103,
            name: 'dzire',
            mileage: '21',
            description:
              'dzire Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
            charging: 'no',
            'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'F8D Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '796'},
              { label : 'Max Power (bhp@rpm)', maxpower: '81.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '69Nm@3500rpm' },
            ],
            'fuel-performance': [
              { label :'Fuel & Performance',  fueltype : 'petrol'},
              { label :'Fuel & Performance', mileagecity : '18'},
              { label :'Fuel & Performance', mileage : '37' },
              { label: 'Fuel Tank Capacity (Litres)', fuelSize: '28' }
            ],
            'dimensions-capacity': [
              { label: 'Length (mm)', length : '3995'},
              { label: 'Width (mm)', width: '1745'},
              { label: 'Height (mm)', height: '1510' },
              { label: 'Ground Clearance Unladen (mm)',  groundClearance : '170'}
            ],
            varient: ['Tour', 'Swift Tour', 'Tour Dzire'],
          },
        ],
      },
    ]
    return { carsList: carsListAPI };
  }
}