import { Component, OnInit } from '@angular/core';
import { SensorViewComponent } from '../sensor-view/sensor-view.component';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';

export class Tab {
  id: string;
  name: string;
}

const TABS: Tab[] = [
  { id: 'Sensors', name: 'Sensors' },
  { id: 'Devices', name: 'Devices' },
  { id: 'Automation', name: 'Automation' }
];

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.css']
})
export class NavTabsComponent implements OnInit {

  constructor() { }
  
  tabs = TABS;
  sensorView = SensorViewComponent;
  underConstruction = UnderConstructionComponent;
  
  tabRef(tab : string) {
    return '#' + tab;
  }

  ngOnInit() {
  }

}
