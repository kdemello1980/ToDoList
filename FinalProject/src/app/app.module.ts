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
import { UpdateTaskService } from './services/update-task.service';
import { SelectTaskService } from './services/select-task.service';


@NgModule({
  declarations: [
    AppComponent,
    UpdateTaskComponent,
    SelectTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [TodosService, UpdateTaskService, SelectTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
