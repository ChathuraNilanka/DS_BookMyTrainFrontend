import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginSignupService } from '../../services/login-signup/login-signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: String;
  password: String;
  phone_number: String;
  nic: String;
  resp: any;
  constructor(public loginsignup: LoginSignupService, private router: Router) { }

  ngOnInit() {
    //initialize variables to null
    this.email = null;
    this.password = null;
    this.nic = null;
    this.phone_number = null;
  }

  signup(){
    //crete data object for signup api
    let body = {
      "email": this.email,
      "password": this.password,
      "mobile": this.phone_number,
      "nic": this.nic
    }
    //validate form details
    if(this.email == null || this.password == null || this.nic == null || this.phone_number == null){
      alert('One or more fields empty');
    }else{
      //call the signup method in loginsignup service
      this.loginsignup.signup(body).subscribe(
        data => {
          this.resp = data, console.log(data.message);
          if(this.resp.message == "New user added!"){
            //if signup is successful then user navigate to the home page
            this.router.navigateByUrl('home');
          }
      });
    }
    

  }

}
