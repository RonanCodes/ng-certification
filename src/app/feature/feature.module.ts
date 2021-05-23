import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { ForecastRowComponent } from './forecast/forecast-row/forecast-row.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'app/app-routing.module';

/**
 * This module contains the main feature modules.
 * These modules usually represent a page.
 *
 * @note
 * Once the feature components get large enough they may warrant their own module.
 */
@NgModule({
  declarations: [DashboardComponent, ForecastComponent, ForecastRowComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    DashboardComponent, ForecastComponent
  ]
})
export class FeatureModule { }
