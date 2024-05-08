import { Component, OnDestroy, OnInit } from '@angular/core';
import { Color } from 'cesium';
import { Subject, distinctUntilChanged, filter, takeUntil } from 'rxjs';

import { version as GlobeViewerVersion } from '../../../lib/version';
import { CesiumService } from '../../services/cesium.service';
import PointInfo from '../../types/point';


/**
 * Represents the Cesium component.
 *
 * This component connects to the Simulation and Telemetry Sentinel servers.
 */
@Component({
  selector: 'app-cesium-component',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css'],
})
class CesiumComponent implements OnInit, OnDestroy {
  /**
   * The title of the component.
   */
  appTitle: string = 'Asset Visualizer';

  /**
   * The version of the component.
   */
  appVersion?: string;

  /**
   * Subject that emits when the component is destroyed.
   */
  private destroyed: Subject<void> = new Subject<void>();

  constructor(public cesium: CesiumService) {}

  /**
   * Initializes the Cesium component.
   */
  public async ngOnInit(): Promise<void> {
    this.appVersion = GlobeViewerVersion;
    this.cesium.startCesium('cesium');
  }

  // /**
  //  * Destroys the Cesium component.
  //  */
  public ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}

export { CesiumComponent };
