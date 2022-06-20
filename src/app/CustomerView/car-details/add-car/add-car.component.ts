import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
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
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  carForm:FormGroup
  Email=localStorage.getItem('email');
    submitted: boolean;
   
  
  constructor(private formBuilder:FormBuilder,private router:Router,private userService:UserService){}
    ngOnInit(): void {
      this.carForm = this.formBuilder.group({
        email: new FormControl('', Validators.required),
        CarCompany: new FormControl('', Validators.required),
        CarModel: new FormControl('', Validators.required),
        CarRegistrationNumber: new FormControl('', Validators.required),
        CarColor: new FormControl('', Validators.required),
       
    });
    }
 
    onSubmit() {
      this.submitted = true;
      if(this.carForm.invalid){
        return;
      }
      this.userService.createCar(this.carForm.value)
        .subscribe( data => {
          this.router.navigate(['cardetails']);
        });
    }
    logoff()
  {
    localStorage.Clear();
    this.router.navigate(['login']);
  }
}
