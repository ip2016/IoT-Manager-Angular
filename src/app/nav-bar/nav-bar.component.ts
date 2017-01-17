import { Component, OnInit } from '@angular/core';

export class MenuItems {
  name: string;
  id: string;
}

const ITEMS: MenuItems[] = [
  { id: 'dashboard', name: 'Dashboard' },
  { id: 'locationSelector', name: 'Select Location' },
]

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  
  menuItems = ITEMS;

  ngOnInit() {
  }

}
