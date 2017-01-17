import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SectionMainComponent } from './section-main/section-main.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { SensorViewComponent } from './sensor-view/sensor-view.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { SectionLocationComponent } from './section-location/section-location.component';
import { SectionDashboardComponent } from './section-dashboard/section-dashboard.component';
import { SectionLocationSelectorComponent } from './section-location-selector/section-location-selector.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionMainComponent,
    NavTabsComponent,
    SensorViewComponent,
    UnderConstructionComponent,
    SectionLocationComponent,
    SectionDashboardComponent,
    SectionLocationSelectorComponent,
    SplashScreenComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
