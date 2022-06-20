import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Car } from 'src/app/Models/CarModel/Car';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  //condition true
  const isSubmitted = form && form.submitted;
  
  //false
  return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  }

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
 
Email=localStorage.getItem('email');
 
  cars: Car[];
  carNum:string;


constructor(private formBuilder:FormBuilder,private router:Router,private userService:UserService){}
  ngOnInit(): void {
    this.userService.GetCarsById(this.Email)
    .subscribe(data=> {
      this.cars = data;
   
    }); 
  //   this.carForm = this.formBuilder.group({
  //     email: new FormControl('', Validators.required),
  //     CarCompany: new FormControl('', Validators.required),
  //     CarModel: new FormControl('', Validators.required),
  //     CarRegistrationNumber: new FormControl('', Validators.required),
  //     CarColor: new FormControl('', Validators.required),
     
  // });
  }
  onSelect(carNum:any){
    localStorage.setItem("CarNumber", carNum.carRegistrationNumber);
  this.router.navigate(['/WashNow']);

  }
  logoff()
  {
    localStorage.Clear();
    this.router.navigate(['login']);
  }

  // onSubmit() {
  //   this.submitted = true;
  //   if(this.carForm.invalid){
  //     return;
  //   }
  //   this.userService.createCar(this.carForm.value)
  //     .subscribe( data => {
  //       this.router.navigate(['profiledetails']);
  //     });
  // }
}
