import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/UserModel';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-customer-profiles',
  templateUrl: './customer-profiles.component.html',
  styleUrls: ['./customer-profiles.component.css']
})
export class CustomerProfilesComponent implements OnInit {

  Customers : User[]
  constructor(private router:Router,private adminservice:AdminService) { }

  ngOnInit(): void {
    this.adminservice.GetAllCustomers()
      .subscribe(data=> {
        this.Customers = data;
     
      }); 
  }
  logoff()
  {
    localStorage.Clear();
    this.router.navigate(['login']);
  }
}
