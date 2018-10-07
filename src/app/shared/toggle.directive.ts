import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  constructor(private renderer: Renderer2,
              private el: ElementRef) { }

  @HostListener('click')
  toggleSetlist() {
    const setsEl = this.el.nativeElement.parentElement.children[1];
    const collapsed = setsEl.classList.contains('collapse');
    if (collapsed) {
      this.renderer.removeClass(setsEl, 'collapse');
    } else {
      this.renderer.addClass(setsEl, 'collapse');
    }
  }
}
