import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Component/home/home.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { ContactUsComponent } from './Component/Contact-Us/contact-us.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import{MatListModule} from '@angular/material/list';
import{ MatButtonModule} from '@angular/material/button';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserService } from './Service/user.service';
import {HttpClientModule} from '@angular/common/http'; // add this line
//import { LoginComponent } from './Component/login/login.component';
import { LoginComponent } from './Component/login/login/login.component';
import { UserLoginComponent } from './Component/login/user-login/user-login.component';
import { WasherLoginComponent } from './Component/login/washer-login/washer-login.component';
import { UserPanelComponent } from './CustomerView/user-panel/user-panel.component';
import { AdminComponent } from './Component/login/login/admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { CarDetailsComponent } from './CustomerView/car-details/car-details.component';
import { UserProfileDetailsComponent } from './CustomerView/user-profile-details/user-profile-details.component';
import { WasherViewComponent } from './CustomerView/washer-view/washer-view.component';
import { WashNowComponent } from './CustomerView/wash-now/wash-now.component';
import { WashRequestComponent } from './CustomerView/wash-request/wash-request.component';
import { AddCarComponent } from './CustomerView/car-details/add-car/add-car.component';
import { WasherProfileDetailsComponent } from './CustomerView/washer-profile-details/washer-profile-details.component';
import { MyWashRequestComponent } from './CustomerView/my-wash-request/my-wash-request.component';
import { CustomerProfilesComponent } from './Admin/customer-profiles/customer-profiles.component';
import { WasherprofilesComponent } from './Admin/washerprofiles/washerprofiles.component';
import { AllWashRequestsComponent } from './Admin/all-wash-requests/all-wash-requests.component';
import { AddWasherComponent } from './Admin/add-washer/add-washer.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    SignUpComponent,
    WashNowComponent,
    LoginComponent,
    WasherViewComponent,
    UserLoginComponent,
    WasherLoginComponent,
    UserPanelComponent,
    AdminComponent,
    AdminDashboardComponent,
    HeaderComponent,
    CarDetailsComponent,
    UserProfileDetailsComponent,
    WashRequestComponent,
    AddCarComponent,
    WasherProfileDetailsComponent,
    MyWashRequestComponent,
    CustomerProfilesComponent,
    WasherprofilesComponent,
    AllWashRequestsComponent,
    AddWasherComponent,
    //CustomerViewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,

    ReactiveFormsModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    NgbModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCardModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
  MatBadgeModule,
  MatGridListModule,
  MatRadioModule,
  MatDatepickerModule,
  MatTooltipModule,
  MatCardModule,
 MatCheckboxModule,
 MatExpansionModule,
 CdkTreeModule,
 MatAutocompleteModule,
 MatDividerModule,
 MatChipsModule




    
    
  ],
  providers: 
  [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
