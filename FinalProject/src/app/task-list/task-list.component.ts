import { Component, OnInit } from '@angular/core';
import {TodosService} from '../services/todos.service';
import {ITask} from './task';
import {Observable} from 'rxjs';

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

  getAllTodos(): ITask[] {
    this.allTodos = [];
    this.todos.getTodos().subscribe(
      response => {
        for(let todo of response) {
          let todoString = JSON.stringify(todo);
          this.allTodos.push(JSON.parse(todoString));
        }
        console.log(this.allTodos);
        
      }
    );
    this.filteredTodos = this.allTodos;
    return this.allTodos;
  }
}
