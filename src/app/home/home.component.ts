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
      'assets/download.jpg',
      'assets/images.jpg',
      'assets/tips-on-budget-Train-travel-in-Sri-Lanka.jpg',
      ];
  }

}
