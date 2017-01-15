import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
  }

}
