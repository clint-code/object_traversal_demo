import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsdataService {

  constructor(
    private http: HttpClient
  ) { }
    
  // getJSONLocalFile(jsonFile){

  //   return this.http.get(`/assets/data/${jsonFile}.json`);

  // }

  getCarsOnAdListingJSON(){
    
    return this.http.get("/assets/data/jiji.json");
    
  }

  getAdvertListingJSON(){

    return this.http.get("/assets/data/adverts-list.json");

  }

}
