import { Component, OnInit, ViewChild, Output, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ITask } from '../task-list/task';
import { TodosService } from '../services/todos.service';
import {MatTable} from '@angular/material/table';
import { UpdateTaskComponent } from '../update-task/update-task.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

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

  statusFilter = '';

  displayedColumns: string[] = ['id', 'title', 'createdOn', 'completed'];
  dataSource = this.filteredTasks;

  get taskFilter(): string{
    return this.taskListFilter;
  }

  set taskFilter(temp: string){
    this.taskListFilter = temp;
    this.dataSource = this.taskListFilter || this.statusFilter ?
      this.filterTasks(this.taskListFilter, this.statusFilter) :
      this.filteredTasks;
    //this.table.renderRows();
  }

  get statFilter(): string{
    return this.statusFilter;
  }
  set statFilter(temp: string){
    this.statusFilter = temp;
    this.dataSource = this.taskListFilter || this.statusFilter ?
      this.filterTasks(this.taskListFilter, this.statusFilter) :
      this.filteredTasks;
    //this.table.renderRows();
  }

  constructor(private todoServ: TodosService, private dialog: MatDialog) {
  }

  filterTasks(filterBy: string, status: string): ITask[]{
    filterBy = filterBy.toLocaleLowerCase();
    const statusBool = status === 'true' ? true : false;

    if (status === '') {
      return this.allTasks.filter((task: ITask) =>
      task.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    return this.allTasks.filter((task: ITask) =>
      task.title.toLocaleLowerCase().indexOf(filterBy) !== -1 && task.completed === statusBool);
  }

  getTasks(): void{
    this.allTasks = [];
    this.todoServ.getTodos().subscribe(
      response => {
        for (const temp of response){
          this.allTasks.push(temp);
        }
      }
    );
  }

  refreshList(): void{
    this.getTasks();
    this.filteredTasks = this.allTasks;
    this.dataSource = this.filteredTasks;
    this.taskFilter = '';
    console.log(this.allTasks);
    this.table.renderRows();
  }

  openUpdateDialog(data: ITask): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data =  data;
    dialogConfig.height = '520px';
    dialogConfig.width = '500px';

    this.dialog.open(UpdateTaskComponent, dialogConfig);
    console.log(data);
  }

  ngOnInit(): void {
    this.getTasks();
    this.filteredTasks = this.allTasks;
    this.dataSource = this.filteredTasks;
    console.log(this.dataSource);
    this.taskFilter = 'e';
  }


  // ngDoCheck(): void {
  //   // this.table.renderRows();
  //   console.log('docheck');
  // }

}
