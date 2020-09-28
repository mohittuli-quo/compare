
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
            'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
              // 'Engine and Transmission': [
              //   {'Engine Type': 'VVT Petrol Engine'},
              //   {'Displacement (cc)': '1197'},
              //   { 'Max Power (bhp@rpm)': '81.80bhp@6000rpm' }
              // ],
              'fuel-performance': [
                { label:'Fuel & Performance', fueltype: 'petrol'},
                { label:'Fuel & Performance', mileagecity: '18'},
                { label:'Fuel & Performance', mileage: '37' }
              ],
              // 'Dimensions & Capacity': [
              //   {'Length (mm)': '3995'},
              //   {'Width (mm)': '1745'},
              //   { 'Height (mm)': '1510' },
              //   {'Ground Clearance Unladen (mm)': '170'}
              // ],`
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
            // 'Engine and Transmission': [
            //   {'Engine Type': 'VVT Petrol Engine'},
            //   {'Displacement (cc)': '1197'},
            //   { 'Max Power (bhp@rpm)': '81.80bhp@6000rpm' }
            // ],
            'fuel-performance': [
              { label :'Fuel & Performance',  fueltype : 'petrol'},
              { label :'Fuel & Performance',  mileageCity : '18'},
              {  label :'Fuel & Performance',  mileage : '37' }
            ],
            // 'Dimensions & Capacity': [
            //   {'Length (mm)': '3995'},
            //   {'Width (mm)': '1745'},
            //   { 'Height (mm)': '1510' },
            //   {'Ground Clearance Unladen (mm)': '170'}
            // ],
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
            // 'Engine and Transmission': [
            //   {'Engine Type': 'VVT Petrol Engine'},
            //   {'Displacement (cc)': '1197'},
            //   { 'Max Power (bhp@rpm)': '81.80bhp@6000rpm' }
            // ],
            'fuel-performance': [
              { label :'Fuel & Performance',  fueltype : 'petrol'},
              { label :'Fuel & Performance',  mileagecity : '18'},
              { label :'Fuel & Performance',  mileage : '37' }
            ],
            // 'Dimensions & Capacity': [
            //   {'Length (mm)': '3995'},
            //   {'Width (mm)': '1745'},
            //   { 'Height (mm)': '1510' },
            //   {'Ground Clearance Unladen (mm)': '170'}
            // ],
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
            // 'Engine and Transmission': [
            //   {'Engine Type': 'VVT Petrol Engine'},
            //   {'Displacement (cc)': '1197'},
            //   { 'Max Power (bhp@rpm)': '81.80bhp@6000rpm' }
            // ],
            'fuel-performance': [
              { label :'Fuel & Performance',  fueltype : 'petrol'},
              { label :'Fuel & Performance', mileagecity : '18'},
              { label :'Fuel & Performance', mileage : '37' }
            ],
            // 'Dimensions & Capacity': [
            //   {'Length (mm)': '3995'},
            //   {'Width (mm)': '1745'},
            //   { 'Height (mm)': '1510' },
            //   {'Ground Clearance Unladen (mm)': '170'}
            // ],
            varient: ['Tour', 'Swift Tour', 'Tour Dzire'],
          },
        ],
      },
      // {
      //   brandName: 'hyundai',
      //     models: [
      //       {
      //         id: 200,
      //         name: 'i10',
      //         mileage: '18',
      //         description: 'Sigma Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
      //         engine: 'petrol',
      //         charging: 'no',
      //         'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
      //         varient: ['VXI', 'VDI', 'VZI'],
      //       },
      //       {
      //         id: 201,
      //         name: 'i20',
      //         mileage: '20',
      //         description:
      //           'Swift Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
      //         engine: 'petrol',
      //         charging: 'yes',
      //         'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
      //         varient: ['i20 VXI', 'i20 VDI', 'i20 VZI'],
      //       },
      //       {
      //         id: 202,
      //         name: 'creta',
      //         mileage: '13',
      //         description:
      //           'alto Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
      //         engine: 'petrol',
      //         charging: 'no',
      //         'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
      //         varient: ['cretaVXI', 'cretaVDI', 'cretaVZI'],
      //       },
      //       {
      //         id: 203,
      //         name: 'tucson',
      //         mileage: '15',
      //         description:
      //           'dzire Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc Description Dummy Desc ',
      //         engine: 'petrol',
      //         charging: 'no',
      //         'img': 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg',
      //         varient: ['VXI', 'VDI', 'VZI'],
      //       },
      //     ],
      //   }
     ]
    return { carsList: carsListAPI };
  }
}