import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MakePaymentService } from '../../services/make-payment/make-payment.service';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {

  trainDetails: any
  times: any;
  classes: any;
  train: any;
  userDetails: any;
  date: any;
  time: String;
  class: number;
  paymentType: String;
  numberOfTickets: number;
  display: boolean = false;
  totalCharge: number;
  cardDetails: any={
    cardNumber: String,
    cvcNumber: String,
    name: String
  };
  dialogDetails: any={
    number: String,
    pin: String
  }
  paymentResp: any;

  constructor(private router: Router, public route: ActivatedRoute, private makePayment: MakePaymentService) { 
    this.getUserDetails();
  }

  ngOnInit() {
    this.getUserDetails();
    this.initNullValues();
    this.route.queryParams.subscribe(params => {
      this.train = params["data"];
      console.log("train", this.train);
      this.trainDetails = JSON.parse(this.train);
      this.getTimes();
      this.getTrainClasses();
    });
    console.log("train1", JSON.parse(this.train));
    
  }

  getUserDetails(){
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if(this.userDetails == null || this.userDetails == undefined){
      this.router.navigateByUrl('login');
    }
    console.log(this.userDetails);
  }

  initNullValues(){
    this.cardDetails.cardNumber ="";
    this.cardDetails.cvcNumber ="";
    this.cardDetails.name ="";
    this.dialogDetails.number ="";
    this.dialogDetails.pin = "";
  }

  getTimes(){
    this.times =[{label: 'Select Time', value: null}];
    this.trainDetails.time.forEach(time => {
      this.times.push({label: time, value: time});
    });
  }
  getTrainClasses(){
    this.classes = [
      {label: "Select Class", value: null},
      {label: "1st Class-Rs."+this.trainDetails.price.class_1, value: parseInt(this.trainDetails.price.class_1)},
      {label: "2nd Class-Rs."+this.trainDetails.price.class_2, value: parseInt(this.trainDetails.price.class_2)},
      {label: "3rd Class-Rs."+this.trainDetails.price.class_3, value: parseInt(this.trainDetails.price.class_3)},
    ]
  }

  checkout() {
    this.display = true;
    console.log(this.paymentType);

    if(this.userDetails.user_type == 'gov'){
      this.totalCharge = (this.numberOfTickets * this.class)*90 /100;
      console.log(this.totalCharge);
    }
    if(this.userDetails.user_type == 'non_gov'){
      this.totalCharge = this.numberOfTickets * this.class
      console.log(this.totalCharge);
    }
  }

  confirmPayment(){
    console.log("confirmPayment",this.cardDetails);
    console.log("dialogDetails",this.dialogDetails);

    let body = {
      "uId": this.userDetails._id,
      "route": this.trainDetails.route,
      "nTickets": this.numberOfTickets,
      "amount": this.totalCharge,
      "time": this.time,
      "type": this.paymentType,
      "date": this.date,
      "mail": this.userDetails.email,
      "phone": this.userDetails.phone_number
    };

    if(this.paymentType == "card"){
      this.makePayment.cardPayment(body).subscribe(
        data => {
          this.paymentResp = data, console.log(data);
          if(this.paymentResp.message == "New payment added!"){
            this.router.navigateByUrl('bookTrain');
          }
        });
    }
    if(this.paymentType == "dialog"){
      this.makePayment.mobilePayment(body).subscribe(
        data => {
          this.paymentResp = data, console.log(data);
          if(this.paymentResp.message == "New payment added!"){
            this.router.navigateByUrl('bookTrain');
          }
        });
    }
  }

}
