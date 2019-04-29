import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import {SlideshowModule} from 'ng-simple-slideshow';
import { BookTrainComponent } from './book-train/book-train.component';
import { HomeComponent } from './home/home.component';

import { TrainService } from '../services/book-train/train.service';



@NgModule({
  declarations: [
    AppComponent,
    BookTrainComponent,
    HomeComponent,
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
    HttpClientModule
  ],
  providers: [
    TrainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
