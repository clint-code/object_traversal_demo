import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConstructorsService {

  constructor(
    private http: HttpClient
  ) { }

  getConstructorsData(){

    return this.http.get("/assets/data/constructors.json");

  }

  getDriversData(){

    return this.http.get("/assets/data/drivers.json");

  }

}
