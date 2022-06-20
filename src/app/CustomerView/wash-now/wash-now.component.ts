import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/Models/CarModel/Car';
import { UserService } from 'src/app/Service/user.service';
import { WashService } from 'src/app/Service/wash.service';

/** Error when invalid control is dirty, touched, or submitted. */

export class MyErrorStateMatcher implements ErrorStateMatcher {
isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//condition true
const isSubmitted = form && form.submitted;

//false
return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
}
}
@Component({
  selector: 'app-wash-now',
  templateUrl: './wash-now.component.html',
  styleUrls: ['./wash-now.component.css']
})


export class WashNowComponent implements OnInit {


matcher = new MyErrorStateMatcher();
submitted:boolean=false;
addwashForm : FormGroup;
Email=localStorage.getItem('email');
carNum=localStorage.getItem('CarNumber');

packages= [{id:'1',value:'Shine & Protect'},{id:'2',value:'Premium'},{id:'3',value:'Deluxe'},{id:'4',value:'Basic'}];
cars:Car[];
location = "Hyderabad";

constructor(private formBuilder:FormBuilder , private router:Router,
  private washService:WashService,private userService:UserService) { }
  

 

  
ngOnInit(){
 
  this.addwashForm = this.formBuilder.group({
    email: new FormControl('', Validators.required),
    washNowSelectedCar: new FormControl('', Validators.required),
    //carRegistrationNumber: new FormControl(''),
    washNowCarLocation: new FormControl('', Validators.required),
    packageName: new FormControl('',Validators.required),
    washNowWashNotes: new FormControl(''),
});
};
logoff()
  {
    localStorage.Clear();
    this.router.navigate(['login']);
  }
onSubmit() {
  this.submitted = true;
  if(this.addwashForm.invalid){
    return;
  }
  this.washService.createWashNow(this.addwashForm.value)
    .subscribe( data => {
      alert("Request Sent Successfully");
    });
    this.userService.GetCarsById(this.Email)
      .subscribe(data=> {
        this.cars = data;
        localStorage.setItem('CarNum','hello')
      }); 
    
    
}

displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
} 










