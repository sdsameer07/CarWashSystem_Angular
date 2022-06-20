import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Output()taggledEvent:any=new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  taggleAction(){
this.taggledEvent.emit('');
  }
  logoff()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['Home']);
  }
}
