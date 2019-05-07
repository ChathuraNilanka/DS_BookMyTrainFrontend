import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  res:any;

  private baseUrl:any = 'http://localhost:8080/trainApp/trains/all'; //api url

  constructor(public http: HttpClient) { }
  //send the get request and return the respone to frontend
  getTrains(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
}