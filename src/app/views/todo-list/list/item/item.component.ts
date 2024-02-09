import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../../../types/item';
import { CreatedAteDirective } from '../../../../directives/created-at/created-at.directive';
import { ResponseIsCompleted } from '../../../../../types/responseIsCompleted';

@Component({
  selector: 'item',
  standalone: true,
  templateUrl: './item.component.html',
  host: {'class': 'border border-pink-400 rounded-lg p-3 w-full flex'},
  hostDirectives: [
    CreatedAteDirective
  ],
  styleUrls: [ './item.component.css' ]
})
export class ItemComponent {
  @Input() item: Item|undefined
  @Output() deleteItem = new EventEmitter<string>();
  @Output() setIsCompleted = new EventEmitter<ResponseIsCompleted>();

  clickDelete () {
    if (!this.item) {
      throw new Error('Item not exist')
    }
    this.deleteItem.emit(this.item._id)
  }

  clickSetIsCompleted () {
    if (!this.item) {
      throw new Error('Item not exist')
    }
    this.setIsCompleted.emit({_id: this.item._id, isCompleted: !this.item.isCompleted})
  }
}
