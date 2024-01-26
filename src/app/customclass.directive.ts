import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appCustomclass]'
})
export class HoverColorDirective {
  private defaultColor: string; // Store the default color

  constructor(private elementRef: ElementRef) {
    this.defaultColor = this.elementRef.nativeElement.style.color || ''; // Store the default color on initialization
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.color = 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.color = this.defaultColor; // Restore the default color
  }
}







