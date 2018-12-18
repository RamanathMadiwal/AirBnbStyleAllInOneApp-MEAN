import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
//import { catchError } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";
import {UserDetails} from './shared/UserDetails'



@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private http:HttpClient) { }


  addUserDetails(userDetails:UserDetails):Observable<any>{
    console.log("Service value-->"+userDetails)
    return this.http.post<any>('api/userdetails',userDetails)
  }


  getUserDetails() {
    return this.http.get(`api/`);
  }

  putUserDetails(user: UserDetails) {
    return this.http.put(`api/userdetails/${user._id}`, user);
  }

  deleteUserDetails(_id: string) {
    return this.http.delete(`api/userdetails/${_id}`);
  }
}
