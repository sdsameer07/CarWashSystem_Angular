import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, MaxLengthValidator, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { User } from 'src/app/Models/UserModel';
/** Error when invalid control is dirty, touched, or submitted. */



@Component({
selector: 'app-signup',
templateUrl: './sign-up.component.html',
styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements OnInit {

Role = "Customer";
Genders=[{id:'1',value:'Male'},{id:'2',value:'Female'}]
submitted:boolean=false;
addForm : FormGroup;

constructor(private formBuilder:FormBuilder , private router:Router,private userService:UserService) { }


ngOnInit(){
  this.addForm = this.formBuilder.group({
    userFirstName:['',Validators.required],
    userLastName: ['', Validators.required],
    userEmail: ['', Validators.required],
    userMobileNumber:['', Validators.required],
    userGender: ['', Validators.required],
    userRole: ['', Validators.required],
    userPassword:['', Validators.required],
    usercreatedDate : new FormControl('')
});
};
get addFormControl() {
  return this.addForm.controls;
}
onSubmit() {
  this.submitted = true;
  if(this.addForm.invalid){
    return;
  }
  this.userService.createUser(this.addForm.value)
    .subscribe( data => {
      alert( "Registration is Successfull")
      this.router.navigate(['login']);
    });
}
onReset() {
  this.submitted = false;
  this.addForm.reset();
}
} 