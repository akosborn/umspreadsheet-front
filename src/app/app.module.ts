import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopNavComponent} from './top-nav/top-nav.component';
import {ShowListComponent} from './show-list/show-list.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {ToggleDirective} from './shared/toggle.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ShowDataComponent} from './show-data/show-data.component';
import {BarChartModule} from '@swimlane/ngx-charts';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {MatIconModule} from '@angular/material';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {TrackListComponent} from './track-list/track-list.component';
import {BsDropdownModule, TypeaheadModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ShowListComponent,
    HomeComponent,
    ToggleDirective,
    ShowDataComponent,
    TrackListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    BarChartModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 0
    }),
    MatIconModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
