import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareCarsComponent } from './compare-cars/compare-cars.component';

const routes: Routes = [
  {path: '', redirectTo: 'compare-cars', pathMatch: 'full'},
  {path: 'compare-cars', component: CompareCarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
