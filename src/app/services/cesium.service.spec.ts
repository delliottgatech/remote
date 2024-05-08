import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Color } from 'cesium';

import { CesiumService } from './cesium.service';
import { CesiumComponent } from '../components/cesium-component/cesium.component';
import PointInfo from '../types/point';

describe('CesiumService', () => {
  let service: CesiumService;
  let fixture: ComponentFixture<CesiumComponent>;
  let component: CesiumComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CesiumComponent],
    }).compileComponents();
    service = TestBed.inject(CesiumService);
    fixture = TestBed.createComponent(CesiumComponent);
    component = fixture.componentInstance;

    await component.ngOnInit();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should plot a new Simulation data point and update it', () => {
    const simulationDataPoint: PointInfo = new PointInfo(
      'CALIPSO',
      new Date(2020, 4, 5, 2, 4, 6),
      [0, 0, 500],
      'Simulation Data',
      Color.BLUE,
      'sample simulation data point',
    );
    const originalCartesian3Position =
      simulationDataPoint.getCartesian3Position();

    service.addSimulationSentinelPointEntity(simulationDataPoint);
    const originalEntity = service.entityCollection.simulationSentinel.get(
      simulationDataPoint.name,
    ) as any;

    expect(service.entityCollection.simulationSentinel.size).toEqual(1);
    expect(originalEntity.position._value.x).toEqual(
      originalCartesian3Position.x,
    );
    expect(originalEntity.position._value.y).toEqual(
      originalCartesian3Position.y,
    );
    expect(originalEntity.position._value.z).toEqual(
      originalCartesian3Position.z,
    );

    simulationDataPoint.positionLLA.longitude += 50;
    simulationDataPoint.positionLLA.latitude += 50;
    simulationDataPoint.positionLLA.altitude += 50;

    const updatedCartesian3Position =
      simulationDataPoint.getCartesian3Position();
    service.addSimulationSentinelPointEntity(simulationDataPoint);
    const updatedEntity = service.entityCollection.simulationSentinel.get(
      simulationDataPoint.name,
    ) as any;

    expect(service.entityCollection.simulationSentinel.size).toEqual(1);
    expect(updatedEntity.position._value.x).toEqual(
      updatedCartesian3Position.x,
    );
    expect(updatedEntity.position._value.y).toEqual(
      updatedCartesian3Position.y,
    );
    expect(updatedEntity.position._value.z).toEqual(
      updatedCartesian3Position.z,
    );
  });

  it('should plot a new T&C STPSAT2 data point and update it', () => {
    const telemetrySTPSAT2DataPoint: PointInfo = new PointInfo(
      'STPSAT2',
      new Date(2020, 4, 5, 2, 4, 6),
      [0, 0, 500],
      'T&C STPSAT2 Data',
      Color.RED,
      'sample stpsat2 data point',
    );
    const originalCartesian3Position =
      telemetrySTPSAT2DataPoint.getCartesian3Position();

    service.addTelemetrySentinelSTPSAT2PointEntity(telemetrySTPSAT2DataPoint);
    const originalEntity =
      service.entityCollection.telemetrySentinelSTPSAT2.get(
        telemetrySTPSAT2DataPoint.name,
      ) as any;

    expect(service.entityCollection.telemetrySentinelSTPSAT2.size).toEqual(1);
    expect(originalEntity.position._value.x).toEqual(
      originalCartesian3Position.x,
    );
    expect(originalEntity.position._value.y).toEqual(
      originalCartesian3Position.y,
    );
    expect(originalEntity.position._value.z).toEqual(
      originalCartesian3Position.z,
    );

    telemetrySTPSAT2DataPoint.positionLLA.longitude += 50;
    telemetrySTPSAT2DataPoint.positionLLA.latitude += 50;
    telemetrySTPSAT2DataPoint.positionLLA.altitude += 50;

    const updatedCartesian3Position =
      telemetrySTPSAT2DataPoint.getCartesian3Position();
    service.addTelemetrySentinelSTPSAT2PointEntity(telemetrySTPSAT2DataPoint);
    const updatedEntity = service.entityCollection.telemetrySentinelSTPSAT2.get(
      telemetrySTPSAT2DataPoint.name,
    ) as any;

    expect(service.entityCollection.telemetrySentinelSTPSAT2.size).toEqual(1);
    expect(updatedEntity.position._value.x).toEqual(
      updatedCartesian3Position.x,
    );
    expect(updatedEntity.position._value.y).toEqual(
      updatedCartesian3Position.y,
    );
    expect(updatedEntity.position._value.z).toEqual(
      updatedCartesian3Position.z,
    );
  });

  it('should plot a new T&C LDPE3A data point and update it', () => {
    const telemetryLDPE3ADataPoint: PointInfo = new PointInfo(
      'LDPE3A',
      new Date(2020, 4, 5, 2, 4, 6),
      [0, 0, 500],
      'T&C LDPE3A Data',
      Color.GREEN,
      'sample ldpe3a data point',
    );
    const originalCartesian3Position =
      telemetryLDPE3ADataPoint.getCartesian3Position();

    service.addTelemetrySentinelLDPE3APointEntity(telemetryLDPE3ADataPoint);
    const originalEntity = service.entityCollection.telemetrySentinelLDPE3A.get(
      telemetryLDPE3ADataPoint.name,
    ) as any;

    expect(service.entityCollection.telemetrySentinelLDPE3A.size).toEqual(1);
    expect(originalEntity.position._value.x).toEqual(
      originalCartesian3Position.x,
    );
    expect(originalEntity.position._value.y).toEqual(
      originalCartesian3Position.y,
    );
    expect(originalEntity.position._value.z).toEqual(
      originalCartesian3Position.z,
    );

    telemetryLDPE3ADataPoint.positionLLA.longitude += 50;
    telemetryLDPE3ADataPoint.positionLLA.latitude += 50;
    telemetryLDPE3ADataPoint.positionLLA.altitude += 50;

    const updatedCartesian3Position =
      telemetryLDPE3ADataPoint.getCartesian3Position();
    service.addTelemetrySentinelLDPE3APointEntity(telemetryLDPE3ADataPoint);
    const updatedEntity = service.entityCollection.telemetrySentinelLDPE3A.get(
      telemetryLDPE3ADataPoint.name,
    ) as any;

    expect(service.entityCollection.telemetrySentinelLDPE3A.size).toEqual(1);
    expect(updatedEntity.position._value.x).toEqual(
      updatedCartesian3Position.x,
    );
    expect(updatedEntity.position._value.y).toEqual(
      updatedCartesian3Position.y,
    );
    expect(updatedEntity.position._value.z).toEqual(
      updatedCartesian3Position.z,
    );
  });

  it('should plot a new Scout data point and update it', () => {
    const scoutDataPoint: PointInfo = new PointInfo(
      'Timmy',
      new Date(2020, 4, 5, 2, 4, 6),
      [0, 0, 500],
      'Scout Data',
      Color.PURPLE,
      'sample scout data point (timmy was here)',
    );
    const originalCartesian3Position = scoutDataPoint.getCartesian3Position();

    service.addScoutSentinelPointEntity(scoutDataPoint);
    const originalEntity = service.entityCollection.scoutSentinel.get(
      scoutDataPoint.name,
    ) as any;

    expect(service.entityCollection.scoutSentinel.size).toEqual(1);
    expect(originalEntity.position._value.x).toEqual(
      originalCartesian3Position.x,
    );
    expect(originalEntity.position._value.y).toEqual(
      originalCartesian3Position.y,
    );
    expect(originalEntity.position._value.z).toEqual(
      originalCartesian3Position.z,
    );

    scoutDataPoint.positionLLA.longitude += 50;
    scoutDataPoint.positionLLA.latitude += 50;
    scoutDataPoint.positionLLA.altitude += 50;

    const updatedCartesian3Position = scoutDataPoint.getCartesian3Position();
    service.addScoutSentinelPointEntity(scoutDataPoint);
    const updatedEntity = service.entityCollection.scoutSentinel.get(
      scoutDataPoint.name,
    ) as any;

    expect(service.entityCollection.scoutSentinel.size).toEqual(1);
    expect(updatedEntity.position._value.x).toEqual(
      updatedCartesian3Position.x,
    );
    expect(updatedEntity.position._value.y).toEqual(
      updatedCartesian3Position.y,
    );
    expect(updatedEntity.position._value.z).toEqual(
      updatedCartesian3Position.z,
    );
  });

  it('should throw error when adding point for invalid data source', () => {
    const samplePoint: PointInfo = new PointInfo(
      'UNKNOWN',
      new Date(2020, 4, 5, 2, 4, 6),
      [0, 0, 500],
      'UNKNOWN Data',
      Color.BLACK,
      'UNKNOWN sample data point',
    );
    expect(() => service.addPointEntity(samplePoint, 'UNKNOWN')).toThrowError();
  });
});
