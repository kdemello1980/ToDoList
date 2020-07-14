/**
 * Modules
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { SelectTaskComponent } from './select-task/select-task.component';

/**
 * Services
 */
import { TodosService } from './services/todos.service';
import { TaskListComponent } from './task-list/task-list.component';
import { UpdateTaskService } from './services/update-task.service';
import { SelectTaskService } from './services/select-task.service';

/**
 * Material Modules
 */
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DeleteTaskComponent } from './delete-task/delete-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    UpdateTaskComponent,
    SelectTaskComponent,
    DeleteTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [TodosService, UpdateTaskService, SelectTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
