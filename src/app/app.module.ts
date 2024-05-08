import {
  CUSTOM_ELEMENTS_SCHEMA,
  Injector,
  NgModule,
  DoBootstrap,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
// import our module
import { AstroComponentsModule } from '@astrouxds/angular';

import { AppComponent } from './app.component';
import { CesiumModule } from './components/cesium-component/cesium.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AstroComponentsModule, CesiumModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('mfe-globe', ce);
  }
}
