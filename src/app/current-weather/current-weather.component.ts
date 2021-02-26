import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { ICurrentWeather } from '../icurrent-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;
  constructor(private weatherservice: WeatherService) {
    this.current = {
      city: '',
      country: '',
      date: new Date(),
      image: '',
      description: '',
      temprature: 0
      };
    }
    ngOnInit(): void {
    this.weatherservice.getCurrentWeather('Bothell', 'US').
    subscribe(data => this.current = data);
  }
}
