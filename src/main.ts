// import './polyfills';

import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/**
 * Window with the NgModuleRef ref value.
 *
 * Keeps the TS compiler happy.
 */
class NgWindow extends Window {
  public ngRef?: NgModuleRef<AppModule> | undefined;
}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads:
  const ngWindow: NgWindow = window;

  if (ngWindow['ngRef']) {
    (ngWindow['ngRef']).destroy();
  }
  ngWindow['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));
