import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/renderer';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef;
    private renderer: Renderer2
  ) {
    console.log(this.elementRef.nativeElement);
    this.renderer.setStyle(this.elementRef.nativeElement,
    'background-color', 'yellow');
  }

}
