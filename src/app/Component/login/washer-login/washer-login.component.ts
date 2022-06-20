import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login/Login';
import { LoginDto } from 'src/app/Models/Login/LoginDto';
import { LoginService } from 'src/app/Service/login.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-washer-login',
  templateUrl: './washer-login.component.html',
  styleUrls: ['./washer-login.component.css']
})
export class WasherLoginComponent implements OnInit {
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
    this.loginservice.washerLogin(this.loginForm.value)
    .subscribe({
      next: (res:LoginDto) => {
       localStorage.setItem("token", res.token);
       localStorage.setItem("role","Washer");
       localStorage.setItem("userId",JSON.stringify(res.userId));
       localStorage.setItem("name",res.userFirstName)
       localStorage.setItem("email",this.loginForm.controls.userEmail.value)
       this.router.navigate(['Washerview']);
    },
    error: (err: HttpErrorResponse) => {
      alert("Invalid Credentials")
      this.errorMessage = err.message;
      this.showError = true;
    }})
  }
  
}
