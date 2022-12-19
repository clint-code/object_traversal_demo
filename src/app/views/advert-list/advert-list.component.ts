import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CarsdataService } from '../../services/carsdata.service';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.scss']
})
export class AdvertListComponent implements OnInit {

  advertListData: any;

  constructor(
    private carsOnAdDataService: CarsdataService
  ) { }

  ngOnInit(): void {


    this.getAdListData();

  }

  getAdListData(){

    this.carsOnAdDataService.getAdvertListingJSON().subscribe(response => {

      if(response[0]["adverts_list"].length > 0){

        this.advertListData = response[0]["adverts_list"];

        console.log(this.advertListData);

      }

      
        
    });
    



   }

  


}
