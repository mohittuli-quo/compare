import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemCarsData implements InMemoryDbService {
  createDb() {
    const carsListAPI =
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
                { label: 'Fuel & Performance', fueltype: 'petrol'},
                { label: 'Mileage (City)', mileagecity: '21'},
                { label: 'Mileage(ARAI)', mileage: '26' },
                { label: 'Fuel Tank Capacity (Litres)', fuelSize: '35' },
              ],

              'dimensions-capacity': [
                { label: 'Length (mm)', length : '3995'},
                { label: 'Width (mm)', width: '1745'},
                { label: 'Height (mm)', height: '1510' },
                { label: 'Ground Clearance Unladen (mm)',  groundClearance : '170'}
              ],

            varient: ['Sigma', 'Delta', 'Zinga'],
          },
          {
            id: 101,
            name: 'Swift',
            mileage: '28',
            description:
              'Swift Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
            charging: 'yes',
            img: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type', enginetype: 'F8D Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '796'},
              { label : 'Max Power (bhp@rpm)', maxpower: '81.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '69Nm@3500rpm' },
            ],
            'fuel-performance': [
              { label : 'Fuel & Performance', fueltype : 'petrol'},
              { label : 'Mileage (City)', mileageCity : '21'},
              { label : 'Mileage(ARAI)', mileage : '28' },
              { label: 'Fuel Tank Capacity (Litres)', fuelSize: '32' }
            ],
            'dimensions-capacity': [
              { label: 'Length (mm)', length : '3995'},
              { label: 'Width (mm)', width: '1745'},
              { label: 'Height (mm)', height: '1510' },
              { label: 'Ground Clearance Unladen (mm)',  groundClearance : '170'}
            ],
            varient: ['LXI', 'VXI', 'VZI'],
          },
          {
            id: 102,
            name: 'alto',
            mileage: '23',
            description:
              'alto Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
            charging: 'no',
            img: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'F8D Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '796'},
              { label : 'Max Power (bhp@rpm)', maxpower: '81.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '69Nm@3500rpm' },
            ],
            'fuel-performance': [
              { label : 'Fuel & Performance',  fueltype : 'petrol'},
              { label : 'Fuel & Performance',  mileagecity : '17'},
              { label : 'Fuel & Performance',  mileage : '19' },
              { label: 'Fuel Tank Capacity (Litres)', fuelSize: '35' }
            ],
            'dimensions-capacity': [
              { label: 'Length (mm)', length : '3995'},
              { label: 'Width (mm)', width: '1745'},
              { label: 'Height (mm)', height: '1510' },
              { label: 'Ground Clearance Unladen (mm)', groundClearance : '170'}
            ],
            varient: ['LXI', 'VXI', 'VZI'],
          },
          {
            id: 103,
            name: 'Dzire',
            mileage: '21',
            description:
              'dzire Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
            charging: 'no',
            img: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'F8D Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '796'},
              { label : 'Max Power (bhp@rpm)', maxpower: '81.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '69Nm@3500rpm' },
            ],
            'fuel-performance': [
              { label : 'Fuel & Performance',  fueltype : 'petrol'},
              { label : 'Fuel & Performance', mileagecity : '18'},
              { label : 'Fuel & Performance', mileage : '20' },
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
      {
        brandName: 'Hyundai',
        models: [
          {
            id: 200,
            name: 'Grand-i10',
            mileage: '18',
            description: 'Sigma Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
            img: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'F8D Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '796'},
              { label : 'Max Power (bhp@rpm)', maxpower: '81.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '69Nm@3500rpm' },
            ],

            'fuel-performance': [
                { label: 'Fuel & Performance', fueltype: 'petrol'},
                { label: 'Mileage (City)', mileagecity: '18'},
                { label: 'Mileage(ARAI)', mileage: '22' },
                { label: 'Fuel Tank Capacity (Litres)', fuelSize: '35' },
              ],

              'dimensions-capacity': [
                { label: 'Length (mm)', length : '3995'},
                { label: 'Width (mm)', width: '1745'},
                { label: 'Height (mm)', height: '1510' },
                { label: 'Ground Clearance Unladen (mm)',  groundClearance : '170'}
              ],

            varient: ['Petrol', 'Diesel'],
          },
          {
            id: 201,
            name: 'i20',
            mileage: '21',
            description:
              'Swift Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
            charging: 'yes',
            img: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'F8D Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '796'},
              { label : 'Max Power (bhp@rpm)', maxpower: '81.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '69Nm@3500rpm' },
            ],
            'fuel-performance': [
              { label : 'Fuel & Performance',  fueltype : 'petrol'},
              { label : 'Mileage (City)',  mileageCity : '18'},
              { label : 'Mileage(ARAI)',  mileage : '21' },
              { label: 'Fuel Tank Capacity (Litres)', fuelSize: '32' }
            ],
            'dimensions-capacity': [
              { label: 'Length (mm)', length : '3995'},
              { label: 'Width (mm)', width: '1745'},
              { label: 'Height (mm)', height: '1510' },
              { label: 'Ground Clearance Unladen (mm)',  groundClearance : '170'}
            ],
            varient: ['Elite', 'Sports', 'Active'],
          },
          {
            id: 202,
            name: 'creta',
            mileage: '16',
            description:
              'alto Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
            charging: 'no',
            img: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'F8D Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '796'},
              { label : 'Max Power (bhp@rpm)', maxpower: '81.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '69Nm@3500rpm' },
            ],
            'fuel-performance': [
              { label : 'Fuel & Performance',  fueltype : 'petrol'},
              { label : 'Mileage (City)',  mileagecity : '14'},
              { label : 'Mileage(ARAI)',  mileage : '16' },
              { label: 'Fuel Tank Capacity (Litres)', fuelSize: '35' }
            ],
            'dimensions-capacity': [
              { label: 'Length (mm)', length : '3995'},
              { label: 'Width (mm)', width: '1745'},
              { label: 'Height (mm)', height: '1510' },
              { label: 'Ground Clearance Unladen (mm)',  groundClearance : '170'}
            ],
            varient: ['petrol', 'Zeta'],
          },
          {
            id: 203,
            name: 'Santro',
            mileage: '21',
            description:
              'dzire Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
            charging: 'no',
            img: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'F8D Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '796'},
              { label : 'Max Power (bhp@rpm)', maxpower: '81.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '69Nm@3500rpm' },
            ],
            'fuel-performance': [
              { label : 'Fuel & Performance',  fueltype : 'petrol'},
              { label : 'Mileage (City)', mileagecity : '18'},
              { label : 'Mileage(ARAI)', mileage : '21' },
              { label: 'Fuel Tank Capacity (Litres)', fuelSize: '28' }
            ],
            'dimensions-capacity': [
              { label: 'Length (mm)', length : '3995'},
              { label: 'Width (mm)', width: '1745'},
              { label: 'Height (mm)', height: '1510' },
              { label: 'Ground Clearance Unladen (mm)',  groundClearance : '170'}
            ],
            varient: ['New Santro', 'Santro', 'Santro Zing'],
          },
        ],
      },
    ];
    return { carsList: carsListAPI };
  }
}
