import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserDetection, OutdatedBrowserWarning } from '@avl-vizbox-develop/browser-support';

import { AppModule } from './app/app.module';


window.addEventListener('load',
  () => platformBrowserDynamic().bootstrapModule(AppModule));

if (BrowserDetection.isOutdatedBrowser()) {
  OutdatedBrowserWarning.showDialog();
}
