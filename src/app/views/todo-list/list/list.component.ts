import { Input, Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from './item/item.component';
import { Item } from '../../../../types/item';
import { ResponseIsCompleted } from '../../../../types/responseIsCompleted';

@Component({
  selector: 'list',
  standalone: true,
  templateUrl: './list.component.html',
  host: {'class': 'w-full max-h-96'},
  imports: [
    CommonModule, ItemComponent
  ]
})
export class ListComponent {
  @Input() list: Item[] | undefined 
  @Output() deleteItem = new EventEmitter<string>();
  @Output() setIsCompleted = new EventEmitter<ResponseIsCompleted>();

  filterByCompleted (): Item[] {
    if (!this.list) {
      return []
    }
    return this.list.filter(item => item.isCompleted)
  }

  filterByTodo (): Item[] {
    if (!this.list) {
      return []
    }
    return this.list.filter(item => !item.isCompleted)
  }
}
