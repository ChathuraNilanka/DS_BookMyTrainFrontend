import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';


import {SlideshowModule} from 'ng-simple-slideshow';
import { BookTrainComponent } from './book-train/book-train.component';
import { HomeComponent } from './home/home.component';

import { TrainService } from '../services/book-train/train.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';



@NgModule({
  declarations: [
    AppComponent,
    BookTrainComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MakePaymentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    SlideshowModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    RadioButtonModule
  ],
  providers: [
    TrainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
