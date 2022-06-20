import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login/Login';
import { LoginDto } from 'src/app/Models/Login/LoginDto';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  errorMessage: string='';
  showError: boolean;

  constructor(private formBuilder:FormBuilder , private router:Router,private loginservice:LoginService) { }

  hide = true;
  submitted:boolean=false;
loginForm : FormGroup;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required,Validators.minLength(8)]),
      userRole: new FormControl(''),
  });
  }

  onSubmit() {
    if(this.loginForm.controls.userEmail.value =="syedsameer@gmail.com" &&
    this.loginForm.controls.userPassword.value=="sameer123"){
      localStorage.setItem("username",this.loginForm.controls.userEmail.value);
      this.router.navigate(['AdminDashboard']);
    }
    else if (this.loginForm.controls.userEmail.value =="udaykumar@gmail.com" &&
    this.loginForm.controls.userPassword.value=="uday1234")
    {
      localStorage.setItem("username",this.loginForm.controls.userEmail.value);
      this.router.navigate(['AdminDashboard']);
    }
else{
  alert("Invalid Admin Credentials")
}   
      
  
  }

}
