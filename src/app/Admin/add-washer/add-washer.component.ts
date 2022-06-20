import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-add-washer',
  templateUrl: './add-washer.component.html',
  styleUrls: ['./add-washer.component.css']
})
export class AddWasherComponent implements OnInit {
  Role = "Washer";
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
        alert( "New Washer Added")
        this.router.navigate(['WasherProfiles']);
      });
  }
  onReset() {
    this.submitted = false;
    this.addForm.reset();
  }

  logoff()
  {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
