import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  loc = 'Boston';
  weather = '';
  curTemp = '';
  high = '';
  low = '';
  humidity = '';

  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeather()
      .subscribe(data => {
        this.weather = data['weather']['0']['main'];
        this.curTemp = data['main']['temp'];
        this.high = data['main']['temp_max'];
        this.low = data['main']['temp_min'];
        this.humidity = data['main']['humidity'];
      });
  }

}
