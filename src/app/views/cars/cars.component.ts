import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CarsdataService } from '../../services/carsdata.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  providers: [
    CarsdataService
  ]
})
export class CarsComponent implements OnInit {

  carsOnAdData: any;

  constructor(
    private carsOnAdDataService: CarsdataService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {

    this.getCarsOnAdData();

  
  }

  getCarsOnAdData(){

    this.carsOnAdDataService.getCarsOnAdListingJSON().subscribe( response => {

      this.carsOnAdData = response;

      console.log(this.carsOnAdData);

    });

  }

  

}
