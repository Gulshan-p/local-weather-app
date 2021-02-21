import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICurrentWeatherData } from './icurrent-weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
  getCurrentWeather(city: string, country:string){
    this.httpClient.get<ICurrentWeatherData>(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}`)
  }
  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeatherData{
    
  }
}
