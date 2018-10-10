import { Directive, HostBinding, OnInit } from '@angular/core';
import {SideNavToggleService} from '../side-nav/side-nav-toggle.service';

@Directive({
  selector: '[appFullWidth]'
})
export class FullWidthDirective implements OnInit {
  @HostBinding('class.col-md-9') colMd9 = true;
  @HostBinding('class.ml-sm-auto') colMlSmAuto = true;
  @HostBinding('class.col-lg-9') colLg9 = true;
  @HostBinding('class.col-xl-10') colXl10 = true;
  @HostBinding('class.col-12') col12 = false;

  constructor(private sideNavToggleService: SideNavToggleService) { }

  ngOnInit(): void {
    this.sideNavToggleService.collapsedChanged
      .subscribe(
        (collapsed: boolean) => this.setFullWidth(collapsed)
      );
  }

  setFullWidth(collapsed: boolean) {
    this.colMd9 = !collapsed;
    this.colMlSmAuto = !collapsed;
    this.colLg9 = !collapsed;
    this.colXl10 = !collapsed;
    this.col12 = collapsed;
  }
}
