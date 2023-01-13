import { Component, OnInit } from '@angular/core';
import { ConstructorsService } from '../../services/constructors/constructors.service';

@Component({
  selector: 'app-formula-one',
  templateUrl: './formula-one.component.html',
  styleUrls: ['./formula-one.component.scss'],
  providers: [
    ConstructorsService
  ]
})
export class FormulaOneComponent implements OnInit {

  driverData: any;

  constructor(
    private constructorDriverService: ConstructorsService
  ) { }

  ngOnInit(): void {

    this.getDriverInformation();

  }

  getDriverInformation(){

    this.constructorDriverService.getDriversData().subscribe(response => {

      if(response[0]["Driver"].length > 0){

        this.driverData = response[0]["Driver"];

        console.log(this.driverData);

      }

    });

  }

}
