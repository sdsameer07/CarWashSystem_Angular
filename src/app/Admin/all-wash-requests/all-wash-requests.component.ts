import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WashRequest } from 'src/app/Models/WashRequest';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-all-wash-requests',
  templateUrl: './all-wash-requests.component.html',
  styleUrls: ['./all-wash-requests.component.css']
})
export class AllWashRequestsComponent implements OnInit {

  allwashrequests : WashRequest[]
  constructor(private router:Router ,private adminservice:AdminService) { }

  ngOnInit(): void {
    this.adminservice.GetAllWashRequests()
      .subscribe(data=> {
        this.allwashrequests  = data;
     
      }); 
  }
  logoff()
  {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
