import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { TodosService } from '../services/todos.service';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

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
  form: FormGroup;

  constructor(private todoServ: TodosService,
              private dialogRef: MatDialogRef<CreateTaskComponent>,
              private cd: ChangeDetectorRef,
              private fb: FormBuilder) { }

  // openDialog(): void { // Here in case we decided to swap to dialog
  //   const dialogRef = this.dialog.open(CreateDialogComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  createTask(): boolean{
    const taskTitle = (document.getElementById('taskTitle') as HTMLInputElement).value;
    const taskComplete = ((document.getElementById('taskComplete') as HTMLInputElement).value === 'Yes') ?
      true : false;
    const taskDescription = (document.getElementById('taskDescription') as HTMLInputElement).value;

    if (!taskTitle || !taskDescription){
      console.log(`${taskTitle} ${taskComplete} ${taskDescription}`);
      this.getErrorMessage(this.inputTitle);
      return false;
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
    return true;
  }

  getErrorMessage(input: FormControl): string{
    if (input.hasError('required')) {
      return 'You must enter a value';
    }
    return;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
    });
  }

  create(): void {
    // Added if in order to make sure the dialog doesn't close if createTask fails
    if (!this.createTask()){
      return;
    }
    this.cd.detectChanges();
    this.dialogRef.close(this.form.value);
  }

  close(): void {
    this.dialogRef.close();
  }

}
