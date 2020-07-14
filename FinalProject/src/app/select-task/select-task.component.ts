import { Component, OnInit, Input, Output } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-select-task',
  templateUrl: './select-task.component.html',
  styleUrls: ['./select-task.component.css']
})
export class SelectTaskComponent implements OnInit {

  @Input() allTasks: Task[];

  @Output() filteredTasks: Task[];

  filterBy: string;

  constructor() { }

  filterTasks(): Task[]{
    return null;
  }

  ngOnInit(): void {
  }

}
