import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="ui-message ui-messages-error">
      {{text}}
    </div>
  `,
  styles: [`
    .ui-messages-error {
      background-color: #FFF;
      border-color: #FFF;
      margin: 0;
      margin-top: 4px;
      font-size: small;
    }
  `
  ]
})
export class MessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
