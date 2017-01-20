import { Component, OnInit, Input } from '@angular/core';
import { SectionMainComponent } from '../section-main/section-main.component';

export enum DeviceStatus {
  online,
  offline,
  invalid,
  stopped
}

export class Device {
  name: string;
  status: DeviceStatus;
}

export class Sensor {
  name: string;
  status: DeviceStatus;
  value: number;
  description: string;
}

export class DeviceLocation {
  name: string;
  id: string;
  title: string;
  devices: Device[];
  sensors: Sensor[];
}

const LOCATIONS: DeviceLocation[] = [
  { 
    id: 'l1', 
    name: 'Basement', 
    title: 'Basement', 
    devices: [{name: 'Temperature Sensor', status: DeviceStatus.online}, {name: 'Termostat', status: DeviceStatus.offline}],
    sensors: [
      {
        name: "dht22",
        status: DeviceStatus.online,
        value: 34,
        description: "Temperature/Humidity sensor"
      },
      {
        name: "ppd42ns",
        status: DeviceStatus.offline,
        value: 0,
        description: "Dust level sensor"
      },
      {
        name: "AirQuality",
        status: DeviceStatus.invalid,
        value: 111,
        description: "Air Quality / Gas monitoring sensor"
      }]
  },
  { 
    id: 'l2', 
    name: 'Kitchen', 
    title: 'Upper Kitchen', 
    devices: [{name: 'Temperature Sensor', status: DeviceStatus.online}, {name: 'Termostat', status: DeviceStatus.offline}],
    sensors: [
      {
        name: "dht22",
        status: DeviceStatus.online,
        value: 34,
        description: "Temperature/Humidity sensor"
      }] 
  },
  { 
    id: 'l3', 
    name: 'Beddroom', 
    title: 'Master Bedroom', 
    devices: [{name: 'Temperature Sensor', status: DeviceStatus.online}, {name: 'Termostat', status: DeviceStatus.offline}],
    sensors: [
      {
        name: "dht22",
        status: DeviceStatus.online,
        value: 34,
        description: "Temperature/Humidity sensor"
      }]
  },
]

@Component({
  selector: 'app-section-location',
  templateUrl: './section-location.component.html',
  styleUrls: ['./section-location.component.css']
})
export class SectionLocationComponent implements OnInit {

  constructor() { }
  
  selectedLocation: DeviceLocation;
  locationSelected = false;
  
  locations = LOCATIONS;
  
  getSelection(location: DeviceLocation) {
    this.selectedLocation = location;
    this.locationSelected = true;
  }

  ngOnInit() {
  }

}
