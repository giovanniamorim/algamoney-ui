
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    CommonModule
  ],
  declarations: [NavbarComponent],
  exports : [NavbarComponent]
})
export class CoreModule { }
