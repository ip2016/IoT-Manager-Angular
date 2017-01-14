import { Component } from '@angular/core';
import { MainSectionComponent } from './MainSection.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  section = MainSectionComponent;
}