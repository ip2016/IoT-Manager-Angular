import { Component, OnInit } from '@angular/core';
import { NavTabsComponent } from '../nav-tabs/nav-tabs.component';

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.css']
})
export class SectionMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  navtab = NavTabsComponent;
}

