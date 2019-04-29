import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  res:any;

  private baseUrl:any = 'http://localhost:8080/trainApp/route/all/Colombo-Kandy';

  constructor(public http: HttpClient) { }

  getTrains(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
}