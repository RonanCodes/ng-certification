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
  bootstrap: [AppComponent]
  // Note: We could add a startup service to fetch local-storage data before the app loads so it's ready
  // (would want a data source/store for the retrieved data).
})
export class AppModule { }
