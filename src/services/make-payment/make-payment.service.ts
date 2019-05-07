import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MakePaymentService {

  baseUrl: String = 'http://localhost:8080/trainApp/payment/' //api url

  constructor(public http: HttpClient) { }

  //card payment gateway method
  //send the post request and return the respone to frontend
  cardPayment(data: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl +'card', data, { headers:headers });
  }

  //mobile payment gateway method
  //send the post request and return the respone to frontend
  mobilePayment(data: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl +'dialog', data, { headers:headers });
  }
}
