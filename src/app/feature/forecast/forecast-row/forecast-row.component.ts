import { Component, Input, OnInit } from '@angular/core';
import { WeatherForecastResponseItem } from '@core/services/weather/weather-forecast.model';
import { WeatherUtil } from '@shared/utils/weather.util';

@Component({
  selector: 'app-forecast-row',
  templateUrl: './forecast-row.component.html',
  styleUrls: ['./forecast-row.component.scss']
})
export class ForecastRowComponent implements OnInit {
  public _forecastRow: WeatherForecastResponseItem | undefined;

  @Input() set forecastRow(weatherForecastResponseItem: WeatherForecastResponseItem | undefined) {
    this.generateDisplayDate(weatherForecastResponseItem);
  }

  private generateDisplayDate(weatherForecastResponseItem: WeatherForecastResponseItem | undefined): void {
    if (weatherForecastResponseItem) {
      console.log({ weatherForecastResponseItem });

      this._forecastRow = weatherForecastResponseItem;
      const dateObj = new Date(weatherForecastResponseItem?.dt * 1000);

      // Alternative date:
      // this.forecastDate = dateObj.toUTCString().slice(0, 11);
      this.forecastDate = dateObj.toDateString().slice(0, 10);

      this.weatherImgLocation = WeatherUtil.getWeatherImage(weatherForecastResponseItem.weather[0].main);
    }
  }

  get forecastRow(): WeatherForecastResponseItem | undefined {
    return this._forecastRow;
  }

  public forecastDate: string | undefined;
  public weatherImgLocation: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
