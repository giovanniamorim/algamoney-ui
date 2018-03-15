import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/renderer';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef;
    private renderer: Renderer2
  ) {}

  @HostListener('focus')
  aoGanharFoco() {
    console.log(this.elementRef.nativeElement);
    this.renderer.setStyle(this.elementRef.nativeElement,
    'background-color', 'yellow');
  }
  @HostListener('blur')
  aoPerderFoco() {
    console.log(this.elementRef.nativeElement);
    this.renderer.setStyle(this.elementRef.nativeElement,
    'background-color', 'transparent');
  }

}
