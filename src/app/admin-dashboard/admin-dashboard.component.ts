import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
@Output()taggledEvent:any=new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  toggleAction(){
this.taggledEvent.emit('');
  }

 
  user(){

  }
  logoff()
  {
    localStorage.Clear();
    this.router.navigate(['Home']);
  }
}
