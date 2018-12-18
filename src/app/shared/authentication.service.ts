import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {IUser} from '../shared/user';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  public currentUser: IUser;

  constructor(private http: HttpClient) {
  }

  public register(userData: any): Observable<any> {
    return this.http.post('api/register', userData);
  }


  isLoggedIn(): boolean {
    try {
      const theUser: any = JSON.parse(localStorage.getItem('currentUser'));
      if (theUser) {
        this.currentUser = theUser.user;
      }
    } catch (e) {
      return false;
    }

    return !!this.currentUser;
  }

  login(body: any) {
    return this.http.post<any>('api/login', JSON.stringify(body), {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
      .pipe(map(user => {
        localStorage.setItem('currentUser', user.message.username);
        localStorage.setItem('access_token', user.token);
      }))
  }

  // user(){
  //   return this.http.get('http://127.0.0.1:3000/users/user',{
  //     observe:'body',
  //     withCredentials:true,
  //     headers:new HttpHeaders().append('Content-Type','application/json')
  //   })
  // }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('access_token');

    return this.http.get('api/logout', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })

  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
  }
}
