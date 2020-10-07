import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemCarsData implements InMemoryDbService {
  createDb(): any {
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
              { label : 'Displacement (cc)', displacement: '826'},
              { label : 'Max Power (bhp@rpm)', maxpower: '71.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '59Nm@3500rpm' },
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
            img: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Swift/7083/1587199027573/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type', enginetype: 'Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '736'},
              { label : 'Max Power (bhp@rpm)', maxpower: '83bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '65Nm@3500rpm' },
            ],
            'fuel-performance': [
              { label : 'Fuel & Performance', fueltype : 'petrol'},
              { label : 'Mileage (City)', mileageCity : '21'},
              { label : 'Mileage(ARAI)', mileage : '28' },
              { label: 'Fuel Tank Capacity (Litres)', fuelSize: '32' }
            ],
            'dimensions-capacity': [
              { label: 'Length (mm)', length : '3825'},
              { label: 'Width (mm)', width: '1721'},
              { label: 'Height (mm)', height: '1530' },
              { label: 'Ground Clearance Unladen (mm)',  groundClearance : '160'}
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
            img: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Alto-800/7066/1565265450182/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'F8D Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '786'},
              { label : 'Max Power (bhp@rpm)', maxpower: '78.20bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '66Nm@3500rpm' },
            ],
            'fuel-performance': [
              { label : 'Fuel & Performance',  fueltype : 'petrol'},
              { label : 'Fuel & Performance',  mileagecity : '17'},
              { label : 'Fuel & Performance',  mileage : '19' },
              { label: 'Fuel Tank Capacity (Litres)', fuelSize: '35' }
            ],
            'dimensions-capacity': [
              { label: 'Length (mm)', length : '3935'},
              { label: 'Width (mm)', width: '1735'},
              { label: 'Height (mm)', height: '1540' },
              { label: 'Ground Clearance Unladen (mm)', groundClearance : '168'}
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
            img: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Dzire-2020/7664/1584705998420/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '802'},
              { label : 'Max Power (bhp@rpm)', maxpower: '84.40bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '71Nm@3600rpm' },
            ],
            'fuel-performance': [
              { label : 'Fuel & Performance',  fueltype : 'petrol'},
              { label : 'Fuel & Performance', mileagecity : '18'},
              { label : 'Fuel & Performance', mileage : '20' },
              { label: 'Fuel Tank Capacity (Litres)', fuelSize: '28' }
            ],
            'dimensions-capacity': [
              { label: 'Length (mm)', length : '4095'},
              { label: 'Width (mm)', width: '1815'},
              { label: 'Height (mm)', height: '1540' },
              { label: 'Ground Clearance Unladen (mm)',  groundClearance : '166'}
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
            img: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Hyundai/Grand-i10/7715/1585572310544/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '756'},
              { label : 'Max Power (bhp@rpm)', maxpower: '61.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '62Nm@3300rpm' },
            ],

            'fuel-performance': [
                { label: 'Fuel & Performance', fueltype: 'petrol'},
                { label: 'Mileage (City)', mileagecity: '18'},
                { label: 'Mileage(ARAI)', mileage: '22' },
                { label: 'Fuel Tank Capacity (Litres)', fuelSize: '35' },
              ],

              'dimensions-capacity': [
                { label: 'Length (mm)', length : '3735'},
                { label: 'Width (mm)', width: '1841'},
                { label: 'Height (mm)', height: '1418' },
                { label: 'Ground Clearance Unladen (mm)',  groundClearance : '164'}
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
            img: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Hyundai/Elite-i20/7470/1592375864360/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'F8D Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '808'},
              { label : 'Max Power (bhp@rpm)', maxpower: '86.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '74Nm@3610rpm' },
            ],
            'fuel-performance': [
              { label : 'Fuel & Performance',  fueltype : 'petrol'},
              { label : 'Mileage (City)',  mileageCity : '18'},
              { label : 'Mileage(ARAI)',  mileage : '21' },
              { label: 'Fuel Tank Capacity (Litres)', fuelSize: '32' }
            ],
            'dimensions-capacity': [
              { label: 'Length (mm)', length : '3984'},
              { label: 'Width (mm)', width: '1761'},
              { label: 'Height (mm)', height: '1582' },
              { label: 'Ground Clearance Unladen (mm)',  groundClearance : '161'}
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
            img: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Hyundai/Creta/6775/1584360708758/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'F8D Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '820'},
              { label : 'Max Power (bhp@rpm)', maxpower: '88.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '78Nm@3800rpm' },
            ],
            'fuel-performance': [
              { label : 'Fuel & Performance',  fueltype : 'petrol'},
              { label : 'Mileage (City)',  mileagecity : '14'},
              { label : 'Mileage(ARAI)',  mileage : '16' },
              { label: 'Fuel Tank Capacity (Litres)', fuelSize: '35' }
            ],
            'dimensions-capacity': [
              { label: 'Length (mm)', length : '3935'},
              { label: 'Width (mm)', width: '1765'},
              { label: 'Height (mm)', height: '1575' },
              { label: 'Ground Clearance Unladen (mm)',  groundClearance : '161'}
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
            img: 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Hyundai/Santro/7460/1596180579378/front-left-side-47.jpg',
            'engine-transmission': [
              { label : 'Engine Type',  enginetype: 'Petrol Engine'},
              { label : 'Displacement (cc)', displacement: '731'},
              { label : 'Max Power (bhp@rpm)', maxpower: '98.80bhp@6000rpm' },
              { label : 'Max Torque (nm@rpm)', maxtorque: '63Nm@3220rpm' },
            ],
            'fuel-performance': [
              { label : 'Fuel & Performance',  fueltype : 'petrol'},
              { label : 'Mileage (City)', mileagecity : '18'},
              { label : 'Mileage(ARAI)', mileage : '21' },
              { label: 'Fuel Tank Capacity (Litres)', fuelSize: '28' }
            ],
            'dimensions-capacity': [
              { label: 'Length (mm)', length : '3575'},
              { label: 'Width (mm)', width: '1695'},
              { label: 'Height (mm)', height: '1668' },
              { label: 'Ground Clearance Unladen (mm)',  groundClearance : '158'}
            ],
            varient: ['New Santro', 'Santro', 'Santro Zing'],
          },
        ],
      },
    ];
    return { carsList: carsListAPI };
  }
}
