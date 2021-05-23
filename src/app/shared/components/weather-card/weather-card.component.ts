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
  @Input() zipCode: number | undefined = 95742;

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
    this.weatherService.getWeatherByZipCode(95742).subscribe(weather => {
      console.log({ weather });
      this.weather = weather;
    });
  }
}
