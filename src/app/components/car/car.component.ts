import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  carsDetailDto:CarDetailDto[]=[];
  constructor(private carService:CarService ,private carDetailDtoService:CarDetailDtoService ) { }

  ngOnInit(): void {
    this.getCars();
    this.getCarDetails();
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      
    })
    
  }


  getCarDetails(){
    this.carDetailDtoService.getCarDetails().subscribe(response=>{
      this.carsDetailDto = response.data
      
    })
    
  }

}
