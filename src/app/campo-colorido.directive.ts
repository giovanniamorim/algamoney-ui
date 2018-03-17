import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/renderer';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @Input() cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus')
  aoGanharFoco() {
    this.corDeFundo = this.cor;
  }
  @HostListener('blur')
  aoPerderFoco() {
    this.corDeFundo = 'transparent';
  }

}
