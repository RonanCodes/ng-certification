import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecastResponse } from './weather-forecast.model';
import { WeatherResponse } from './weather.model';

// Backup url if OpenWeatherAPI isn't working: https://lp-store.herokuapp.com/weather?zipcode=95742

// Note: We could create simplified interfaces for the response data, instead of just passing the response around.
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // Note: This should be stored in a config file or app module:
  private openWeatherMapAppId = '5a4b2d457ecbef9eb2a71e480b947604';

  private countryCode = 'us';
  private baseUrl = 'http://api.openweathermap.org/data/2.5';

  private getWeatherByZipCodeApiUrl = (zipCode: number) => `${this.baseUrl}/weather?zip=${zipCode},${this.countryCode}&appid=${this.openWeatherMapAppId}`;
  private getForecastByZipCodeApiUrl = (zipCode: number, numberOfDays: number) => `${this.baseUrl}/forecast/daily?zip=${zipCode},${this.countryCode}&cnt=${numberOfDays}&appid=${this.openWeatherMapAppId}`;

  constructor(private httpClient: HttpClient) { }

  getWeatherByZipCode(zipCode: number): Observable<WeatherResponse> {
    return this.httpClient.get<WeatherResponse>(this.getWeatherByZipCodeApiUrl(zipCode));
  }

  getForecastByZipCode(zipCode: number, numberOfDays = 5): Observable<WeatherForecastResponse> {
    if (numberOfDays < 1 || numberOfDays > 16) {
      numberOfDays = 5;
      console.error('Forecast can only be made between 1 and 16 days, defaulting to 5 days.')
    }

    return this.httpClient.get<WeatherForecastResponse>(this.getForecastByZipCodeApiUrl(zipCode, numberOfDays));
  }
}
