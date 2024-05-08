import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AstroComponentsModule } from '@astrouxds/angular';

import { CesiumComponent } from './cesium.component';

@NgModule({
  imports: [CommonModule, AstroComponentsModule],
  declarations: [CesiumComponent],
  exports: [CesiumComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CesiumModule {}
