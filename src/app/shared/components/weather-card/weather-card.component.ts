import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherResponse } from '@core/services/weather/weather.model';
import { WeatherService } from '@core/services/weather/weather.service';
import { WeatherUtil } from '@shared/utils/weather.util';

// Note: Default zipcodes: 95742, 10001, 33101

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  private _zipCode: number | undefined;

  @Input() set zipCode(zipCode: number | undefined) {
    if (zipCode) {
      this._zipCode = zipCode;
      this.weatherService.getWeatherByZipCode(zipCode).subscribe(weather => {
        this.weather = weather;
      }, error => console.error('Error retrieving weather by zip code', { error }));
    }
  }

  get zipCode(): number | undefined {
    return this._zipCode;
  }

  @Output() zipCodeRemoveInitiated = new EventEmitter<number>();

  public _weather: WeatherResponse | undefined;
  public set weather(weatherResponse: WeatherResponse | undefined) {
    if (weatherResponse) {
      this._weather = weatherResponse;
      this.weatherImgLocation = WeatherUtil.getWeatherImage(weatherResponse.weather[0].main);
    }
  };

  public get weather(): WeatherResponse | undefined {
    return this._weather;
  }


  public weatherImgLocation: string | undefined;

  constructor(private weatherService: WeatherService) { }

}
