import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/renderer';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus')
  aoGanharFoco() {
    this.corDeFundo = 'yellow';
  }
  @HostListener('blur')
  aoPerderFoco() {
    this.corDeFundo = 'transparent';
  }

}
