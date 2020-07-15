import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { ITask } from '../task-list/task';
import { TodosService } from '../services/todos.service';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-select-task',
  templateUrl: './select-task.component.html',
  styleUrls: ['./select-task.component.css']
})
export class SelectTaskComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<ITask>;

  allTasks: ITask[] = [];

  @Output() filteredTasks: ITask[];

  taskListFilter = '';

  displayedColumns: string[] = ['id', 'title', 'createdOn', 'completed'];
  dataSource = this.filteredTasks;

  get taskFilter(): string{
    return this.taskListFilter;
  }

  set taskFilter(temp: string){
    this.taskListFilter = temp;
    this.dataSource = this.taskListFilter ?
      this.filterTasks(this.taskListFilter) :
      this.filteredTasks;
    this.table.renderRows();
  }

  constructor(private todoServ: TodosService) {
  }

  filterTasks(filterBy: string): ITask[]{
    filterBy = filterBy.toLocaleLowerCase();

    return this.allTasks.filter((task: ITask) =>
      task.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  getTasks(): void{
    this.todoServ.getTodos().subscribe(
      response => {
        for (const temp of response){
          this.allTasks.push(temp);
        }
      }
    );
  }

  ngOnInit(): void {
    this.getTasks();
    this.filteredTasks = this.allTasks;
    this.dataSource = this.filteredTasks;
  }

  ngAfterViewChecked(): void{
    this.table.renderRows();
  }

}
