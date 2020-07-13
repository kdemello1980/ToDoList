import { Component, OnInit } from '@angular/core';
import {TodosService} from '../services/todos.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  pageTitle = 'Task List';
  constructor(private todos: TodosService) { }

  ngOnInit(): void {
  }

  getAllTodos() {
    this.todos.getTodos().subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
