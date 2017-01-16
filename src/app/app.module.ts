import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SectionMainComponent } from './section-main/section-main.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { SensorViewComponent } from './sensor-view/sensor-view.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionMainComponent,
    NavTabsComponent,
    SensorViewComponent,
    UnderConstructionComponent,
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
