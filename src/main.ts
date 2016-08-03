import { upgradeAdapter } from "./app/upgrade_adapter";
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MODAL_BROWSER_PROVIDERS } from 'angular2-modal/platform-browser';
import { AppComponent } from './app/app.component';
if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [MODAL_BROWSER_PROVIDERS]);

if ((window as any).app) {
  (window as any).angular.element(document).ready(function () {
      (window as any).app.directive("myApp", upgradeAdapter.downgradeNg2Component(AppComponent));

      upgradeAdapter.addProvider([MODAL_BROWSER_PROVIDERS]);
      upgradeAdapter.bootstrap(document.documentElement, ["app"], {strictDi: true});
  });
}
