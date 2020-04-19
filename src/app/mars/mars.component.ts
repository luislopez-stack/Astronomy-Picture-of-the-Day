import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../shared/model/mars-image';
import { HttpClient } from '@angular/common/http';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.sass']
})
export class MarsComponent implements OnInit {

  marsImage: MarsImage[];
  //Injeccion
  constructor(private servicio: NasaApiService) { }

  ngOnInit() {
    this.servicio.getRover()
    .subscribe(result => {
      this.marsImage = result.photos;
    });
  }

}
