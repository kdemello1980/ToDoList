import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TodosService } from '../services/todos.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  inputTitle = new FormControl('', [Validators.required]);
  inputComplete = new FormControl('', [Validators.required]);
  inputDescription = new FormControl('', [Validators.required]);
  defaultValue = 'No';

  constructor(public dialog: MatDialog, private todoServ: TodosService) { }

  // openDialog(): void { // Here in case we decided to swap to dialog
  //   const dialogRef = this.dialog.open(CreateDialogComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  createTask(): void{
    const taskTitle = (document.getElementById('taskTitle') as HTMLInputElement).value;
    const taskComplete = ((document.getElementById('taskComplete') as HTMLInputElement).value === 'Yes') ?
      true : false;
    const taskDescription = (document.getElementById('taskDescription') as HTMLInputElement).value;

    if (!taskTitle || !taskDescription){
      console.log(`${taskTitle} ${taskComplete} ${taskDescription}`);
      this.getErrorMessage(this.inputTitle);
      return;
    }
    // format used to 'post' to the api
    const taskForm = {
      completed: taskComplete,
      title: taskTitle,
      description: taskDescription
    };
    console.log(taskForm);
    this.todoServ.postTodo(taskForm).subscribe(
      response => {
        console.log(response);
      }
    );

  }

  getErrorMessage(input: FormControl): string{
    if (input.hasError('required')) {
      return 'You must enter a value';
    }
    return;
  }

  ngOnInit(): void {
  }

}
