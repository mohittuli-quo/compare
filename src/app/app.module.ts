import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompareCarsComponent } from './compare-cars/compare-cars.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemCarsData } from './api/carsData';

@NgModule({
  declarations: [
    AppComponent,
    CompareCarsComponent,
    // CompareCarsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule,
    HttpClientModule,
   HttpClientInMemoryWebApiModule.forRoot(InMemCarsData),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
