import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/hw4';

  public getWeather() {
    return this.http.get(this.url);
  }
}
