import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareCarsComponent } from './compare-cars/compare-cars.component';
import { CompareCarsDetailComponent } from './compare-cars/compare-cars-detail/compare-cars-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'compare-cars', pathMatch: 'full'},
  {path: 'compare-cars', component: CompareCarsComponent },
  {path: 'compare-cars-details', component: CompareCarsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
