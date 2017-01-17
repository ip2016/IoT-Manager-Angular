import { Component } from '@angular/core';
import { SectionMainComponent } from './section-main/section-main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  section = SectionMainComponent;
  navbar = NavBarComponent;
}