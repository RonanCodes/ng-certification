import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherForecastResponse } from '@core/services/weather/weather-forecast.model';
import { WeatherService } from '@core/services/weather/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public zipCode: number | undefined;
  public weatherForecast: WeatherForecastResponse | undefined;

  constructor(private activatedRoute: ActivatedRoute, private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const zipCode = Number(routeParams.get('zipCode'));
    this.zipCode = zipCode;

    this.weatherService.getForecastByZipCode(zipCode, 5).subscribe(forecast => {
      this.weatherForecast = forecast;
    }, error => console.error('Error retrieving forecast by zip code', { error }));
  }
}
