import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { ZipCodeInputComponent } from './components/zip-code-input/zip-code-input.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app-routing.module';

/**
 * This module contains:
 * - The shared components, directives, pipes that are used throughout the application.
 * - Imports that are used throughout the application.
 */
@NgModule({
  declarations: [WeatherCardComponent, ZipCodeInputComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [WeatherCardComponent, ZipCodeInputComponent, FormsModule]
})
export class SharedModule { }
