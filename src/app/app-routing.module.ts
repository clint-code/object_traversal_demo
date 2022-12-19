import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertListComponent } from './views/advert-list/advert-list.component';
import { CarsComponent } from './views/cars/cars.component';

const routes: Routes = [
  {
    path: '',
    component: CarsComponent
  },

  {
    path:'advertlist',
    component: AdvertListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
