import { Component, OnInit } from '@angular/core';
import {TodosService} from '../services/todos.service';
import {ITask} from './task';
import {DeleteTaskComponent} from '../delete-task/delete-task.component';
import { SELECT_PANEL_INDENT_PADDING_X } from '@angular/material/select';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  pageTitle = 'Task List';
  allTodos: ITask[];
  filteredTodos: ITask[];
  
  constructor(private todos: TodosService) {
    this.getAllTodos();
  }

  ngOnInit(): void {
  }

  getAllTodos(): void {
    this.allTodos = [];
    this.todos.getTodos().subscribe(
      response => {
        for(const todo of response) {
          const todoString = JSON.stringify(todo);
          this.allTodos.push(JSON.parse(todoString));
        }
      }
    );
    this.filteredTodos = this.allTodos;
    console.log(this.allTodos);
  }

  deleteTodo(id): void {
    console.log(id);
    this.todos.deleteTodo(id).subscribe();
  }

  deleteAndRefresh(id): void {
    if (confirm('Delete this task?')) {
      this.deleteTodo(id);
      alert('Task deleted');
      this.getAllTodos();
    }
  }

}
