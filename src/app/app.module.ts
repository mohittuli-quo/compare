import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompareCarsComponent } from './compare-cars/compare-cars.component';
import { CompareCarsDetailComponent } from './compare-cars/compare-cars-detail/compare-cars-detail.component';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    AppComponent,
    CompareCarsComponent,
    CompareCarsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
