import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/Models/Address';
import { Car } from 'src/app/Models/CarModel/Car';
import { User } from 'src/app/Models/UserModel';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.css']
})

export class UserProfileDetailsComponent implements OnInit {

  cars: Car[];
  user:User;
  address:Address;
  carNum:string;
  Email=localStorage.getItem('email');
  constructor(private router: Router, private userService:UserService) { }
  ngOnInit() {
     
    // this.userService.GetCars()
    //   .subscribe(data=> {
    //     this.cars = data;
    //   }); 
     this.userService.GetCarsById(this.Email)
      .subscribe(data=> {
        this.cars = data;
     
      }); 
      this.userService.getUserByEmail(this.Email).subscribe(data=>{
        this.user= data;
      });
      this.userService.getAddressByEmail(this.Email).subscribe(data=>{
        this.address=data;
      });
     
    } 
    logoff()
  {
    localStorage.Clear();
    this.router.navigate(['login']);
  }
    
  }



