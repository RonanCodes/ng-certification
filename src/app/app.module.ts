import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { ZipcodeInputComponent } from './zipcode-input/zipcode-input.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, DashboardComponent, ForecastComponent, WeatherCardComponent, ZipcodeInputComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
