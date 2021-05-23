import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherResponse } from '@core/services/weather/weather.model';
import { WeatherService } from '@core/services/weather/weather.service';
import { WeatherUtil } from '@shared/utils/weather.util';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  // Defaults: 95742, 10001, 33101

  public zipCodeNew: number | undefined;

  private _zipCode: number | undefined;

  @Input() set zipCode(zipCode: number | undefined) {
    if (zipCode) {
      this._zipCode = zipCode;
      this.weatherService.getWeatherByZipCode(zipCode).subscribe(weather => {
        console.log({ weather });
        this.weather = weather;
      });
    }
  }

  get zipCode(): number | undefined {
    return this._zipCode;
  }

  @Output() zipCodeRemoveInitiated = new EventEmitter<number>();

  public _weather: WeatherResponse | undefined;
  public set weather(weatherResponse: WeatherResponse | undefined) {
    console.log({ weatherResponse });

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

  ngOnInit(): void {

  }
}
