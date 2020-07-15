import { Component, OnInit, Input, Output } from '@angular/core';
import { ITask } from '../task-list/task';
import { TodosService } from '../services/todos.service';

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

  constructor(private todoServ: TodosService) { }

  filterTasks(filterBy: string): ITask[]{
    filterBy = filterBy.toLocaleLowerCase();

    return this.allTasks.filter((task: ITask) =>
      task.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  getTasks(): void{
    this.todoServ.getTodos().subscribe(
      response => {
        console.log(response);
        for (const temp of response){
          this.allTasks.push(temp);
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
