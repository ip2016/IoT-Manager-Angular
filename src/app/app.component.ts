import { Component } from '@angular/core';
import { SectionMainComponent } from './section-main/section-main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  section = SectionMainComponent;
}