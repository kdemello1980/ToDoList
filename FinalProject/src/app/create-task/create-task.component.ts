import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(public dialog: MatDialog, private todoServ: TodosService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  createTask(): void{
    const taskComplete = (document.getElementById('taskComplete').innerText === 'completed') ?
      true : false;

    const taskForm = {
      completed: taskComplete,
      title: document.getElementById('taskTitle').innerText,
      description: document.getElementById('taskDescription').innerText
    };

    this.todoServ.postTodo(taskForm).subscribe(
      response => {
        console.log(response);
      }
    );

  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: 'create-task-dialog.html',
})
export class CreateDialogComponent {}
