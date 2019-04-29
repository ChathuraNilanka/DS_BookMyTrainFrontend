import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(public http: HttpClient, public trainService: TrainService) { 
    
  }
  

  ngOnInit() {
    // this.res = this.trainService.getTrains();
    // console.log("res1", this.res);
    this.trainService.getTrains().subscribe(
      data => {
        this.trains = data.routes, console.log(data);
      },
      error => {
        console.log(error);
      }
    )  
  }

}
