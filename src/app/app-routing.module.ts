import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import { AddRentalComponent } from './components/add-rental/add-rental.component';
import {HomeComponent} from './components/home/home.component'
import {RegisterComponent} from "./components/register/register.component";
import {UserdetailsComponent} from "./components/userdetails/userdetails.component";
const routes: Routes = [
  { path: '', pathMatch: 'full',component:HomeComponent },
  {path:'Login' ,component:LoginComponent},
  {path:'Register' ,component:RegisterComponent},
  {path:'Rental',component:AddRentalComponent},
  {path:'UserDetails',component:UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
