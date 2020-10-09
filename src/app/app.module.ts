import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { InMemCarsData } from './api/carsData';

import { CompareCarsComponent } from './compare-cars/compare-cars.component';
import { CompareCarsDetailComponent } from './compare-cars/compare-cars-detail/compare-cars-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CompareCarsComponent,
    CompareCarsDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemCarsData),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
