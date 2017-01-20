import { Component } from '@angular/core';

export class MenuItems {
  name: string;
  id: string;
}

const ITEMS: MenuItems[] = [
  { id: 'dashboard', name: 'Dashboard' },
  { id: 'deviceMap', name: 'Locations' },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  menuItems = ITEMS;
  
  selectedId = "none";
  
  getSelection(id: string) {
    this.selectedId = id;
  }
}