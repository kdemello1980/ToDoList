import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITask } from '../task-list/task';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Completed {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  form: FormGroup;
  // data: ITask;
  selectedComplete: string;
  foo: boolean;

  completedList: Completed[] = [
    { value: 'open', viewValue: 'Open'},
    { value: 'complete', viewValue: 'Complete'}
  ];


  constructor(private dialogRef: MatDialogRef<UpdateTaskComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ITask,
              private fb: FormBuilder
    ) {
      this.foo = this.data.completed;
      console.log(this.foo);

  }
  // constructor(){}

// I have to wrap conditionals in functions? WTF?
blargh(): void {
  if (this.foo == false){
    this.selectedComplete = this.completedList[0].value
  } else {
    this.selectedComplete = this.completedList[1].value;
  }
  console.log(this.selectedComplete);
}

ngOnInit(): void {
    console.log(this.data.id);
    this.form = this.fb.group({
      id: [this.data.id, []],
      title: [this.data.title, []],
      createdOn: [this.data.createdOn, []],
      description: [this.data.description, []],
      completed: [this.data.completed, []]
    });
    this.blargh();
  }

save(): void {
    this.dialogRef.close(this.form.value);
  }

close(): void {
    this.dialogRef.close();
  }

}
