import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookMyTrain';

  userDetails: any;

  constructor(private router: Router){
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
  }
  //logout method 
  logout(){
    localStorage.setItem('userDetails', null);
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
    this.router.navigateByUrl('home');
  }
}
