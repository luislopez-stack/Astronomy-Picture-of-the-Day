import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  apod: Apod;
  error: string;
  constructor(private nasaApi: NasaApiService) { }

  ngOnInit() {
    this.nasaApi.getApod()
    .subscribe((data: Apod) => {
      this.apod = data;
    }, error => {
      console.log("Error al conectar servidor");
      this.error = "Error al conectar con el servidor";
    }
    );
  }



}
