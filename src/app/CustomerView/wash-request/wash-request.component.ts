import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { WashRequest } from 'src/app/Models/WashRequest';
import { WashRequestService } from 'src/app/Service/wash-request.service';

@Component({
  selector: 'app-wash-request',
  templateUrl: './wash-request.component.html',
  styleUrls: ['./wash-request.component.css']
})
export class WashRequestComponent implements OnInit {

  washrequests : WashRequest[];  
  request:String;
  constructor(private router: Router, private washrequestservice:WashRequestService) { }
  ngOnInit() {     
    
     this.washrequestservice.GetWashRequest()
      .subscribe(data=> {
        this.washrequests = data;     
      }); 
     
     
    }    
    logoff()
  {
    localStorage.clear();
    this.router.navigate(['login']);
  }
    Accepted(request:any){
      this.washrequestservice.AcceptRequest(request.carRegistrationNumber)
      .subscribe(data=> {

       alert("<b>You Accepted A new Wash Request</b>");
        this.router.navigate(['Washerview']);
      
      }); 
    }
    Rejected(request:any){
      this.washrequestservice.RejectRequest(request.carRegistrationNumber)
      .subscribe(data=> {

       alert("<b>You Rejected A Wash Request</b>");
        this.router.navigate(['Washerview']);
      
      }); 

    }

}
