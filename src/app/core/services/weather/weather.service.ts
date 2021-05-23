import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, zip } from 'rxjs';
import { WeatherForecastResponse } from './weather-forecast.model';
import { WeatherResponse } from './weather.model';

// TODO: Enhancement: Create simplified interfaces for the response data, instead of just passing the response around.
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // TODO: This should be stored in a config file or app module:
  private openWeatherMapAppId = '5a4b2d457ecbef9eb2a71e480b947604';

  // TODO: Get countrycode from users browser:
  private countryCode = 'us'; // Try other country codes, like 'IE', do Eircodes work?

  private baseUrl = 'http://api.openweathermap.org/data/2.5';
  private getWeatherByZipCodeApiUrl = (zipCode: number) => `${this.baseUrl}/weather?zip=${zipCode},${this.countryCode}&appid=${this.openWeatherMapAppId}`;
  private getForecastByZipCodeApiUrl = (zipCode: number, numberOfDays: number) => `${this.baseUrl}/forecast/daily?zip=${zipCode},${this.countryCode}&cnt=${numberOfDays}&appid=${this.openWeatherMapAppId}`;

  constructor(private httpClient: HttpClient) { }

  getWeatherByZipCode(zipCode: number): Observable<WeatherResponse> {
    return this.httpClient.get<WeatherResponse>(this.getWeatherByZipCodeApiUrl(zipCode));
  }

  /**
   * The OpenWeather API doesn't seem to allow for multi zip code in one request.
   * So we will do a ForkJoin to do simultaneous requests.
   */
  getWeatherByZipCodes(zipCodes: number[]): Observable<WeatherResponse[]> {
    // Use a ForkJoin:
    return of();
  }

  getForecastByZipCode(zipCode: number, numberOfDays = 5): Observable<WeatherForecastResponse> {
    // Keep number within range (TODO: log error).
    numberOfDays = (numberOfDays >= 1 && numberOfDays <= 16) ? numberOfDays : 1;
    return this.httpClient.get<WeatherForecastResponse>(this.getForecastByZipCodeApiUrl(zipCode, numberOfDays));
  }
}
