import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WashRequest } from 'src/app/Models/WashRequest';
import { WashRequestService } from 'src/app/Service/wash-request.service';

@Component({
  selector: 'app-my-wash-request',
  templateUrl: './my-wash-request.component.html',
  styleUrls: ['./my-wash-request.component.css']
})
export class MyWashRequestComponent implements OnInit {

  washrequests : WashRequest[];  
  Email=localStorage.getItem('email');

  constructor(private router: Router, private washrequestservice:WashRequestService) { }
  ngOnInit() {     
    
     this.washrequestservice.GetWashRequestByEmail(this.Email)
      .subscribe(data=> {
        this.washrequests = data;     
      }); 
     
     
    }   
    logoff()
  {
    localStorage.Clear();
    this.router.navigate(['login']);
  } 

}
