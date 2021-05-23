import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherByZipCode(zipCode: number): Observable<Weather> {
    return of();
  }

  /**
   * The OpenWeather API doesn't seem to allow for multi zip code in one request.
   * So we will do a ForkJoin to do simultaneous requests.
   */
  getWeatherByZipCodes(zipCodes: number[]): Observable<Weather> {
    // Use a ForkJoin:
    return of();
  }

  getFiveDayForecastByZipCode(): Observable<Weather> {
    return of();
  }
}
