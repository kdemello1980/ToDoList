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

  constructor() { }

  filterTasks(filterBy: string): Task[]{
    filterBy = filterBy.toLocaleLowerCase();

    return this.allTasks.filter((task: Task) =>
      task.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
  }

}
