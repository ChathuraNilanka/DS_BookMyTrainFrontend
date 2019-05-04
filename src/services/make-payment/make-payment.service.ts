import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MakePaymentService {

  baseUrl: String = 'http://localhost:8080/trainApp/payment/'

  constructor(public http: HttpClient) { }

  cardPayment(data: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl +'card', data, { headers:headers });
  }

  mobilePayment(data: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl +'dialog', data, { headers:headers });
  }
}
