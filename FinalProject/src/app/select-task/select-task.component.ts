import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { ITask } from '../task-list/task';
import { TodosService } from '../services/todos.service';
import {MatTable, MatTableDataSource} from '@angular/material/table';
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

  // @Output() filteredTasks: ITask[];

  taskListFilter = '';

  displayedColumns: string[] = ['id', 'title', 'createdOn', 'completed'];
  // dataSource = this.filteredTasks;

  public matDataSource = new MatTableDataSource<ITask>();

  // get taskFilter(): string{
  //   return this.taskListFilter;
  // }

  // set taskFilter(temp: string){
  //   this.taskListFilter = temp;
  //   this.dataSource = this.taskListFilter ?
  //     this.filterTasks(this.taskListFilter) :
  //     this.filteredTasks;
  //   this.table.renderRows();
  // }

  constructor(private todoServ: TodosService, private dialog: MatDialog) {
    this.matDataSource.filterPredicate = (data, filter: string ): boolean => {
      return data.title.toLowerCase().includes(filter);
    };
  }

  filterTasks(filterBy: string): ITask[]{
    filterBy = filterBy.toLocaleLowerCase();

    return this.allTasks.filter((task: ITask) =>
      task.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  getTasks(): void{
    this.todoServ.getTodos().subscribe(
      response => {
        // this.allTasks = [];
        // for (const temp of response){
        //   this.allTasks.push(temp);
          this.matDataSource.data = response as ITask[];
        }
    );
  }

  refreshList(): void{
    this.getTasks();
    // this.filteredTasks = this.allTasks;
    // this.dataSource = this.filteredTasks;
    // this.taskFilter = '';
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
    // this.filteredTasks = this.allTasks;
    // this.dataSource = this.filteredTasks;
    // this.refreshList();
  }


  doFilter = (value: string) => {
    this.matDataSource.filter = value.trim().toLocaleLowerCase();
  }




  // ngDoCheck(): void {
  //   // this.table.renderRows();
  //   console.log('docheck');
  // }

}
