import { Component, OnInit, Input } from '@angular/core';
import { SectionLocationComponent, DeviceLocation } from '../section-location/section-location.component';

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
  
  @Input() selectedLocation: DeviceLocation;
  
  tabs = TABS;
  selectedTab = "Sensors";
  
  getSelection(id: string) {
    this.selectedTab = id;
  }

  ngOnInit() {
  }

}
