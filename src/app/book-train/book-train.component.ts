import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { TrainService } from '../../services/book-train/train.service';

@Component({
  selector: 'app-book-train',
  templateUrl: './book-train.component.html',
  styleUrls: ['./book-train.component.css']
})
export class BookTrainComponent implements OnInit {

  tempTrain: any;
  public trains: any;
  date: any
  userDetails: any;

  constructor(public http: HttpClient, public trainService: TrainService, private router: Router) { 
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if(this.userDetails == null || this.userDetails == undefined){
      this.router.navigateByUrl('login');
    }
  }
  

  ngOnInit() {
    console.log(localStorage.getItem('userDetails'));
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if(this.userDetails == null || this.userDetails == undefined){
      this.router.navigateByUrl('login');
    }
    // this.res = this.trainService.getTrains();
    // console.log("res1", this.res);
    this.trainService.getTrains().subscribe(
      data => {
        this.trains = data.routes, console.log(data);
      },
      error => {
        console.log(error);
      }
    ) ; 
  }

}
