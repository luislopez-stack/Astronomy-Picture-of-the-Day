import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  apod: Apod;
  constructor() { }

  ngOnInit() {
  }



}
