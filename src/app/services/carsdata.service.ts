import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsdataService {

  constructor(
    private http: HttpClient
  ) { }
 
  getCarsOnAdListingJSON(){
    
    return this.http.get("/assets/data/jiji.json");
  }

}
