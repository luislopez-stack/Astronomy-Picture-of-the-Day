import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'DEMO_KEY';
const ROVER_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  //DEPENDENCY INJECTION: HTTPCLIENT
  constructor(private httpClient: HttpClient) { }

  getApod(): Observable<Apod> {
    //return this.DATA;
    return this.httpClient.get<Apod>(APOD_URL + '?api_key=' + API_KEY);
  }

  getRover(): Observable<any> {
    //TEMPLE LITTERALS
    return this.httpClient.get<any>(`${ROVER_URL}&api_key=${API_KEY}`);
  }
}
