import 'zone.js';
import { NgZone } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

declare global {
  // eslint-disable-next-line no-var
  var ngZone: NgZone;
}

(async () => {
  const app = await createApplication({
    providers: [
      globalThis.ngZone ? { provide: NgZone, useValue: globalThis.ngZone } : [],
    ],
  });

  const plotElement = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('mfe-globe', plotElement);
})();
