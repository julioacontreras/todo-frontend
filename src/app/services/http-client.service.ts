import { Injectable } from '@angular/core';
import { Item } from '../../types/item';
import { ItemToCreate } from '../../types/itemToCreate';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemRepositoryService {
  headers = { 'content-type': 'application/json' }

  constructor() { }

  async getItems(): Promise<Item[]> {
    const response = await fetch(environment.endpoints.query.getItems)
    return await response.json() as Item[]
  }

  async deleteItem(id: string): Promise<void> {
    const body = JSON.stringify({ data: { id } })
    await fetch(environment.endpoints.command.deleteItem, { method: 'POST', body, headers: this.headers })
  }

  async createItem(item: ItemToCreate): Promise<void> {
    const body = JSON.stringify({ data: item })
    await fetch(environment.endpoints.command.createItem, { method: 'POST', body, headers: this.headers })
  }

  async setIsCompleted(id: string, isCompleted: boolean): Promise<void> {
    const body = JSON.stringify({ data: { id, isCompleted } })
    await fetch(environment.endpoints.command.setIsComplete, { method: 'POST', body, headers: this.headers })
  }

}
