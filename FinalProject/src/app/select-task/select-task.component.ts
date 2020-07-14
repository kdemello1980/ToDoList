import { Component, OnInit, Input, Output } from '@angular/core';
import { ITask } from '../task-list/task';

@Component({
  selector: 'app-select-task',
  templateUrl: './select-task.component.html',
  styleUrls: ['./select-task.component.css']
})
export class SelectTaskComponent implements OnInit {

  @Input() allTasks: ITask[];

  @Output() filteredTasks: ITask[];

  taskListFilter = 'Default';

  get taskFilter(): string{
    return this.taskListFilter;
  }

  set taskFilter(temp: string){
    this.taskListFilter = temp;
    this.filteredTasks = this.taskListFilter ?
      this.filterTasks(this.taskListFilter) :
      this.filteredTasks;
  }

  constructor() { }

  filterTasks(filterBy: string): ITask[]{
    filterBy = filterBy.toLocaleLowerCase();

    return this.allTasks.filter((task: ITask) =>
      task.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
  }

}
