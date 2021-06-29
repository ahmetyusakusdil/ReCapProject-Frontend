import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto';
import { RentalDetailDtoService } from 'src/app/services/rental-detail-dto.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[]=[];
  rentalDetailDtos:RentalDetailDto[]=[]
  constructor(private rentalService:RentalService , private rentalDetailDtoService:RentalDetailDtoService) { }

  ngOnInit(): void {
   this.getRentalDetailDtos()
   this.getRentals()
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response=>this.rentals=response.data)
  }
  getRentalDetailDtos(){
    this.rentalDetailDtoService.getRentalDetails().subscribe(response=>this.rentalDetailDtos=response.data)
  }
}
