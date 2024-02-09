import { Component, signal, OnInit } from '@angular/core';

// types
import { Item } from '../../../types/item';

// components
import { InputTextComponent } from '../../components/input-text/input-text.component';
import { ListComponent } from './list/list.component';

// services
import { ItemRepositoryService } from '../../services/http-client.service';

// types
import { ResponseIsCompleted } from '../../../types/responseIsCompleted';

@Component({
  selector: 'todo-list',
  standalone: true,
  host: {'class': 'p-10 h-[32rem] sm:w-4/6 lg:w-4/12 bg-gray-800 rounded-lg w-full'},
  templateUrl: './todo-list.component.html',
  imports: [
    InputTextComponent, ListComponent
  ], 
})

export class TodoListComponent implements OnInit {
  list = signal<Item[]>([])

  constructor (private crudItemService: ItemRepositoryService) {}

  ngOnInit(): void {
    this.crudItemService.getItems().then((items: Item[]) => {
      this.list.set(items)
    })
  }
    
  async addItem(title: string) {
    const item = {
      title,
      createdAt: new Date().getTime(),
      isCompleted: false
    }
    await this.crudItemService.createItem(item)
    this.list.set(await this.crudItemService.getItems())
  }

  async deleteItem(id: string) {
    await this.crudItemService.deleteItem(id)
    this.list.set(await this.crudItemService.getItems())
  }

  async setIsCompleted(data: ResponseIsCompleted) {
    await this.crudItemService.setIsCompleted(data._id, data.isCompleted)
    this.list.set(await this.crudItemService.getItems())
  }

}
