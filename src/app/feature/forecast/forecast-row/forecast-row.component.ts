import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { WeatherForecastResponseItem } from '@core/services/weather/weather-forecast.model';
import { WeatherUtil } from '@shared/utils/weather.util';

// Note: This is a dumb component, so we can do OnPush so that the change detection only gets run when the setter is called on the Input().
@Component({
  selector: 'app-forecast-row',
  templateUrl: './forecast-row.component.html',
  styleUrls: ['./forecast-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastRowComponent implements OnInit {
  public forecastDate: string | undefined;
  public weatherImgLocation: string | undefined;

  public _forecastRow: WeatherForecastResponseItem | undefined;
  get forecastRow(): WeatherForecastResponseItem | undefined {
    return this._forecastRow;
  }

  @Input() set forecastRow(weatherForecastResponseItem: WeatherForecastResponseItem | undefined) {
    this.generateDisplayDate(weatherForecastResponseItem);
  }

  private generateDisplayDate(weatherForecastResponseItem: WeatherForecastResponseItem | undefined): void {
    if (weatherForecastResponseItem) {
      this._forecastRow = weatherForecastResponseItem;
      const dateObj = new Date(weatherForecastResponseItem?.dt * 1000);

      // Alternative date:
      // this.forecastDate = dateObj.toUTCString().slice(0, 11);

      this.forecastDate = dateObj.toDateString().slice(0, 10);

      this.weatherImgLocation = WeatherUtil.getWeatherImage(weatherForecastResponseItem.weather[0].main);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
