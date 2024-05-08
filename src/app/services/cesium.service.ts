import { Injectable } from '@angular/core';
import * as Cesium from 'cesium';

import PointInfo from '../types/point';

// Note this is a personal user access token. We may need to update if it stops working
// The token is currently tied to Keaton
Cesium.Ion.defaultAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYTBlODE3MS1lYmEwLTQ3NTMtOGM0Mi1kNDU1NjRkNmMxYzUiLCJpZCI6Nzk0NzEsImlhdCI6MTY0MjA5MjE2MH0.krnzijLnzPHfiXSwDJWBHT2vbPOFDFG8ce4QKorQwPY';

const CESIUM_PIXEL_SIZE: number = 8;

/**
 * Service for handling Cesium operations.
 *
 * This service is responsible for handling the Cesium viewer and entities.
 * It is also responsible for adding and updating entities on the globe.
 */
@Injectable({
  providedIn: 'root',
})
export class CesiumService {
  viewer?: Cesium.Viewer;
  constructor() {}

  /**
   * Starts the Cesium viewer.
   * @param div The div element to render the Cesium viewer in.
   */
  startCesium(div: string): void {
    this.viewer = new Cesium.Viewer(div, { animation: true });
    this.viewer.scene.sun = new Cesium.Sun();
    this.viewer.scene.moon = new Cesium.Moon();
  }
}
