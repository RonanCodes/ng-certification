import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { FeatureModule } from './feature/feature.module';

/**
 * @note
 * This module should be as small as possible.
 */
@NgModule({
  imports: [BrowserModule, CoreModule, FeatureModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent] // TODO: Add a startup service to fetch local-storage data before app load so it's ready.
})
export class AppModule { }
