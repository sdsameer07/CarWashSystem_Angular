import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { LoginComponent } from './Component/login/login/login.component';
import { ContactUsComponent } from './Component/Contact-Us/contact-us.component';
import { UserLoginComponent } from './Component/login/user-login/user-login.component';
import { WasherLoginComponent } from './Component/login/washer-login/washer-login.component';
import { AuthGuard } from './shared/auth.guard';
import { UserPanelComponent } from './CustomerView/user-panel/user-panel.component';
import { AdminComponent } from './Component/login/login/admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CarDetailsComponent } from './CustomerView/car-details/car-details.component';
import { WasherViewComponent } from './CustomerView/washer-view/washer-view.component';
import { UserProfileDetailsComponent } from './CustomerView/user-profile-details/user-profile-details.component';
import { WashNowComponent } from './CustomerView/wash-now/wash-now.component';
import { WashRequestComponent } from './CustomerView/wash-request/wash-request.component';
import { AddCarComponent } from './CustomerView/car-details/add-car/add-car.component';
import { MyWashRequestComponent } from './CustomerView/my-wash-request/my-wash-request.component';
import { CustomerProfilesComponent } from './Admin/customer-profiles/customer-profiles.component';
import { WasherProfileDetailsComponent } from './CustomerView/washer-profile-details/washer-profile-details.component';
import { WasherprofilesComponent } from './Admin/washerprofiles/washerprofiles.component';
import { AddWasherComponent } from './Admin/add-washer/add-washer.component';
import { AllWashRequestsComponent } from './Admin/all-wash-requests/all-wash-requests.component';


const routes: Routes = [
  {path :'',redirectTo:'Home',pathMatch:'full'},
  {path :'Home',component: HomeComponent},
  {path :'about-us',component:AboutUsComponent},
  {path:'Sign-up',component:SignUpComponent},
  {path :'login',component:LoginComponent},
  {path :'userLogin',component:UserLoginComponent},
  {path :'washerLogin',component:WasherLoginComponent},
  {path :'AdminLogin',component:AdminComponent},
  {path:'AdminDashboard',component:AdminDashboardComponent},
  {path :'CustomerView',component:UserPanelComponent,canActivate:[AuthGuard]},  
  {path :'Washerview',component:WasherViewComponent,canActivate:[AuthGuard]},
  {path:'cardetails',component:CarDetailsComponent},
  {path:'profiledetails',component:UserProfileDetailsComponent},
  {path:'WashNow',component:WashNowComponent},
  {path:'WashRequest',component:WashRequestComponent},
  {path:'AddCar',component:AddCarComponent},
  {path:'myRequest',component:MyWashRequestComponent},
  {path:'CustomerProfiles',component:CustomerProfilesComponent},
  {path:'WasherProfiles',component:WasherprofilesComponent},
  {path:'AddWasher',component:AddWasherComponent},
  {path:'AllWashRequests',component:AllWashRequestsComponent},








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
