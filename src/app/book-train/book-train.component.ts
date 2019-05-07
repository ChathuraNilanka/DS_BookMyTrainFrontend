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
  }

  //Navigating method for makePayment page
  openPage(data: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "data": JSON.stringify(data),
      }
    };
    this.router.navigate(["makePayment"], navigationExtras); //navigate to payment page with  selected train details
    console.log(data, "data");
  }

  ngOnInit() {
    console.log(localStorage.getItem('userDetails'));
    this.getUserDetails();
    this.getTrains(); 
  }

  //Checking if user loged or not
  getUserDetails(){
    this.userDetails = JSON.parse(localStorage.getItem('userDetails')); //get the user's data from local storage
    if(this.userDetails == null || this.userDetails == undefined){
      this.router.navigateByUrl('login'); // navigate to login page
    }
    console.log(this.userDetails);
  }

  //get the train details
  getTrains(){
    //calling train service method for display train details
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
