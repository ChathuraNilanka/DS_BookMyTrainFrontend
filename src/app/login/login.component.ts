import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app.module';

import { LoginSignupService } from '../../services/login-signup/login-signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: any;
  public password: any;
  resp: any;
  length: any
  constructor(public loginsignup: LoginSignupService, private router: Router) { }

  ngOnInit() {
    this.email = null; 
    this.password = null;
  }

  login(){
    console.log(this.email, this.password);
    if(this.email == null || this.password == null){
      alert('One or more fields empty');
    }else{
      this.loginsignup.login(this.email, this.password).subscribe(
        data => {
          this.resp = data.users[0], console.log(data.users[0]);
          this.length = data.users.length;
  
          if(this.length == 0){
            console.log(0);
            localStorage.setItem('userDetails', null);
            this.router.navigateByUrl('login');
            //login error alert box
          }
          if (this.length == 1){
            console.log(1);
            localStorage.setItem('userDetails', JSON.stringify(this.resp));
            console.log(localStorage.getItem('userDetails'));
            platformBrowserDynamic().bootstrapModule(AppModule)
              .catch(err => console.error(err));
            this.router.navigateByUrl('home');
          }
        },
        error => {
          console.log(error);
        }
      );
    }
    

    
  }

}
