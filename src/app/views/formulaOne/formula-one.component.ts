import { Component, OnInit } from '@angular/core';
import { ConstructorsService } from 'src/app/services/constructors/constructors.service';

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

    this.constructorDriverService.getDriversData().subscribe( response => {

      this.driverData = response;

      console.log(response);
    })

  }

}
