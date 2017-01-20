import { Component, OnInit, Input } from '@angular/core';
import { SectionLocationComponent, Sensor, DeviceStatus } from '../section-location/section-location.component';

@Component({
  selector: 'app-sensor-view',
  templateUrl: './sensor-view.component.html',
  styleUrls: ['./sensor-view.component.css']
})
export class SensorViewComponent implements OnInit {

  constructor() { }
  
  get sensorList() : Sensor[] {
    return this.sensors;
  }
  
  @Input('sensorList') set sensorList(value: Sensor[]) {
    this.sensors = value;
  }

  private sensors: Sensor[];
  
  setStatus(status: DeviceStatus) {
    switch(status) {
      case DeviceStatus.offline: return { glyphicon: 'glyphicon-remove', style: 'panel-danger' };
      case DeviceStatus.online: return { glyphicon: 'glyphicon-ok', style: 'panel-success' };
      case DeviceStatus.invalid: return { glyphicon: 'glyphicon-warning-sign', style: 'panel-warning' };
      default: return { glyphicon: 'glyphicon-remove', style: 'panel-danger' };
    }
  }
  
  ngOnInit() {
  }

}
