import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { TodoListComponent } from './views/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  schemas: [ NO_ERRORS_SCHEMA ],
  imports: [
    CommonModule, RouterOutlet, TodoListComponent
  ],
})
export class AppComponent {
}
