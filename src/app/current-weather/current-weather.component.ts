import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor() {
    this.current = {
      city: 'Redmond',
      country: 'usa',
      date: new Date(),
      image: '',
      temprature: 30,
      description: 'snowy',
    }
   }

  ngOnInit(): void {
  }

}
