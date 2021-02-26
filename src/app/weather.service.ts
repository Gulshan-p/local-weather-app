import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICurrentWeather } from './icurrent-weather';
import { ICurrentWeatherData } from './icurrent-weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
  getCurrentWeather(search: string|number, country?:string){
    let uriparams = '';
    if (typeof search === 'string') {
      uriparams =`q=${search}`
    }
    else{
      uriparams =`zip=${search}`
    }
    if (country){
      uriparams =`${uriparams},${country}`
    }
     return this.httpClient.get<ICurrentWeatherData>(`http://api.openweathermap.org/data/2.5/weather?${uriparams}&appid=${environment.appId}`).pipe(map(data => this.transformToICurrentWeather(data)))
  }
  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather{
   return{
     city: data.name,
     country: data.sys.country,
     date: new Date(data.dt * 1000),
    image: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    temprature: data.main.temp * 9/5 - 459.67,
    description: data.weather[0].description
   }
  }
}
