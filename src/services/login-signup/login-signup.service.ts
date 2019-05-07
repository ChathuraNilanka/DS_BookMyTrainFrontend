import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  baseUrl: String = 'http://localhost:8080/trainApp/user/' //api url

  constructor(public http: HttpClient) { }

  //login method
  //send the get request and return the respone to frontend
  login(email, password): Observable<any>{
    return this.http.get(this.baseUrl + email + '/'+ password);
  }

  //signup method
  //send the post request and return the respone to frontend
  signup(userDetails: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl +'add', userDetails, { headers:headers });
  }
}
