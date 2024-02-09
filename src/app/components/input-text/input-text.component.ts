import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-text',
  standalone: true,
  host: {'class': 'w-full'},
  templateUrl: './input-text.component.html',
  imports: [ FormsModule ]
})
export class InputTextComponent {
  @Input() placeHolder = '' 
  @Output() addItem = new EventEmitter<string>();

  value = ''

  setValue (event: KeyboardEvent) {
    this.value = (event.target as HTMLInputElement).value
  }

  click() {
    if (!this.value) {
      return
    }
    this.addItem.emit(this.value)
    this.value = ''
  }
}
