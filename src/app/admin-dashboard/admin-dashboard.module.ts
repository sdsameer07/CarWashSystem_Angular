import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from 'src/app/admin-dashboard/admin-dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from 'src/app/header/header.component';

const routes: Routes = [
  {path:'Admin-dasboard',component:AdminDashboardComponent,
  children:[
  {path: "",  component: AdminDashboardComponent, pathMatch: "full"},
  ],
},
];

@NgModule({
  declarations: [
     AdminDashboardComponent,
    HeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ]
})
export class AdminDashboardModule { }
