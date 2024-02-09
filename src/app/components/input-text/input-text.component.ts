import { Component, Input, Output, EventEmitter, signal } from '@angular/core';

@Component({
  selector: 'input-text',
  standalone: true,
  host: {'class': 'w-full'},
  templateUrl: './input-text.component.html'
})
export class InputTextComponent {
  @Input() placeHolder = '' 
  @Output() addItem = new EventEmitter<string>();

  value = signal('')

  setValue (event: KeyboardEvent) {
    this.value.set((event.target as HTMLInputElement).value)
  }

  click() {
    if (!this.value()) {
      return
    }
    this.addItem.emit(this.value())
    this.value.set('')
  }
}
