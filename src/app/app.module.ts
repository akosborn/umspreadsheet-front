import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ShowListComponent } from './show-list/show-list.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ToggleDirective } from './shared/toggle.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ShowDataComponent } from './show-data/show-data.component';
import {BarChartModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ShowListComponent,
    HomeComponent,
    ToggleDirective,
    ShowDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    BarChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
