import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  Name=localStorage.getItem('name');
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logoff()
  {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
