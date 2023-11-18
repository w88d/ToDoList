import { Component } from '@angular/core';

interface Todo {
  id: number;
  description: string;
  completed: boolean;
  postponed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      const todo: Todo = {
        id: Date.now(),
        description: this.newTodo,
        completed: false,
        postponed: false
      };
      this.todos.push(todo);
      this.newTodo = '';
    }
  }

  markAsComplete(todo: Todo) {
    todo.completed = true;
  }

  postpone(todo: Todo) {
    todo.postponed = true;
  }

  delete(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  cleanCompletedTodos() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  restorePostponedTodos() {
    this.todos.forEach(todo => {
      if (todo.postponed) {
        todo.postponed = false;
      }
    });
  }
}
