import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/UserModel';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-washerprofiles',
  templateUrl: './washerprofiles.component.html',
  styleUrls: ['./washerprofiles.component.css']
})
export class WasherprofilesComponent implements OnInit {

  Washers : User[]
  constructor(private router:Router,private adminservice:AdminService) { }

  ngOnInit(): void {
    this.adminservice.GetAllWashers()
      .subscribe(data=> {
        this.Washers  = data;
     
      }); 
      
  }
  logoff()
  {
    localStorage.Clear();
    this.router.navigate(['login']);
  }
}
