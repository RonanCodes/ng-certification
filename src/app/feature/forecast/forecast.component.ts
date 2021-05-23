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
    console.log('CONSTRUCT');

  }

  ngOnInit(): void {
    console.log('INIT');

    const routeParams = this.activatedRoute.snapshot.paramMap;
    const zipCode = Number(routeParams.get('zipCode'));
    this.zipCode = zipCode;

    // this.activatedRoute.params.subscribe(params => {
    //   this.zipCode = +params['zipCode']; // (+) converts string 'id' to a number

    //   // In a real app: dispatch action to load the details here.
    //   this.weatherService.getForecastByZipCode(this.zipCode).subscribe(forecast => {
    //     console.log({ forecast });
    //     this.weatherForecast = forecast;
    //   });
    // });

    this.weatherService.getForecastByZipCode(zipCode, 5).subscribe(forecast => {
      console.log({ forecast });
      this.weatherForecast = forecast;
    });
  }
}
