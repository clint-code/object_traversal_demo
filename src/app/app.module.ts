import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './views/cars/cars.component';
import { HttpClientModule } from '@angular/common/http';
import { AdvertListComponent } from './views/advert-list/advert-list.component';
import { FormulaOneComponent } from './views/formulaOne/formula-one.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AdvertListComponent,
    FormulaOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
