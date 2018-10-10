import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ShowListComponent } from './show-list/show-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ToggleDirective } from './shared/toggle.directive';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavToggleService } from './side-nav/side-nav-toggle.service';
import { FullWidthDirective } from './shared/full-width.directive';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ShowListComponent,
    HomeComponent,
    FullWidthDirective,
    ToggleDirective,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    SideNavToggleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
