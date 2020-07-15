import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../task-list/task';

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  @Input() filteredTasks: ITask[];

  displayedColumns: string[] = ['id', 'title', 'createdOn', 'completed'];
  dataSource = this.filteredTasks;

  constructor() {  }

  ngOnInit(): void {
    console.log(this.filteredTasks +
      "hey");
  }

}
