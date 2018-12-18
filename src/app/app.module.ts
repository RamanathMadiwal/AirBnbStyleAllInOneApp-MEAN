import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './components/login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BookingdialogComponent} from './bookingdialog/bookingdialog.component';
import {AddRentalComponent} from './components/add-rental/add-rental.component';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from "./components/register/register.component";
import {RentalService} from './shared/rental.service';
import { UserdetailsComponent } from './components/userdetails/userdetails.component'

/* common Modules */
import { ToastrService } from './common/toastr.service';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    BookingdialogComponent,
    AddRentalComponent,
    RegisterComponent,
    HomeComponent,
    UserdetailsComponent,
    ChangepasswordComponent,
    ProfileComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RentalService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
