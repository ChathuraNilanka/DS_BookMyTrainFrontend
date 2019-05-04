import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';


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
  buttonStatus: boolean = true;
  

  constructor(public http: HttpClient, public trainService: TrainService, private router: Router) { 
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if(this.userDetails == null || this.userDetails == undefined){
      this.router.navigateByUrl('login');
    }
  }

  openPage(data: any) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
          "data": JSON.stringify(data),
      }
    };
    this.router.navigate(["makePayment"], navigationExtras);
    console.log(data, "data");
  }

  confirmBook(){
    console.log("confirmBook()");
    this.buttonStatus = false;
  }
  

  ngOnInit() {
    console.log(localStorage.getItem('userDetails'));
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if(this.userDetails == null || this.userDetails == undefined){
      this.router.navigateByUrl('login');
    }
    
    this.trainService.getTrains().subscribe(
      data => {
        this.trains = data.data, console.log(data.data);
      },
      error => {
        console.log(error);
      }
    ) ; 
  }

}
