import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imagesUrl;

  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
      'assets/train1.jpg',
      'assets/train2.jpg',
      'assets/train3.jpg',
      'assets/train4.jpg',
      ];
  }

}
