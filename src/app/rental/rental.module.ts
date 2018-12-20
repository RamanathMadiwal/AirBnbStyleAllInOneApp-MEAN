import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RentalListItemComponent} from "./rental-list-item/rental-list-item.component";
import {RentalListComponent} from "./rental-list/rental-list.component";
import {AddRentalComponent} from "../components/add-rental/add-rental.component";
import {RentalService} from "./shared/rental.service";
import {RentalCreateComponent} from './rental-create/rental-create.component';
import {RentalDetailComponent} from './rental-detail/rental-detail.component';
import {RentalSearchComponent} from './rental-search/rental-search.component';
import {RentalUpdateComponent} from './rental-update/rental-update.component';
import {RentalComponent} from './rental/rental.component';

import {AuthGuard} from '../auth/shared/auth.guard';
import {RentalGuard} from './shared/rental.guard';


const routes: Routes = [
  {
    path: 'rentals',
    component: RentalComponent,
    children: [
      {path: '', component: RentalListComponent},
      {path: 'new', component: RentalCreateComponent, canActivate: [AuthGuard]},
      {path: ':rentalId/edit', component: RentalUpdateComponent, canActivate: [AuthGuard, RentalGuard]},
      {path: ':rentalId', component: RentalDetailComponent},
      {path: ':city/homes', component: RentalSearchComponent}
    ]
  }
]

@NgModule({
  declarations:
    [
      RentalListComponent,
      RentalListItemComponent,
      AddRentalComponent,
      RentalCreateComponent,
      RentalDetailComponent,
      RentalSearchComponent,
      RentalUpdateComponent,
      RentalComponent
    ],

  imports:
    [
      CommonModule,
      RouterModule.forChild(routes),
      HttpClientModule,
      FormsModule
    ],
  providers: [RentalService]

})
export class RentalModule {

}
