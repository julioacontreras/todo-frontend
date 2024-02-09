import { Injectable } from '@angular/core';
import { Item } from '../../types/item';
import Settings from '../../settings.json';
import { ItemToCreate } from '../../types/itemToCreate';

@Injectable({
  providedIn: 'root'
})
export class ItemRepositoryService {
  headers = { 'content-type': 'application/json' }

  constructor() { }

  async getItems(): Promise<Item[]> {
    const response = await fetch(Settings.cqrs.query['get-items'])
    return await response.json() as Item[]
  }

  async deleteItem(id: string): Promise<void> {
    const body = JSON.stringify({ data: { id } })
    await fetch(Settings.cqrs.command['delete-item'], { method: 'POST', body, headers: this.headers })
  }

  async createItem(item: ItemToCreate): Promise<void> {
    const body = JSON.stringify({ data: item })
    await fetch(Settings.cqrs.command['create-item'], { method: 'POST', body, headers: this.headers })
  }

  async setIsCompleted(id: string, isCompleted: boolean): Promise<void> {
    const body = JSON.stringify({ data: { id, isCompleted } })
    await fetch(Settings.cqrs.command['set-is-completed'], { method: 'POST', body, headers: this.headers })
  }

}
