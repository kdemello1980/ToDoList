import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodosService } from './services/todos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { SelectTaskComponent } from './select-task/select-task.component';

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
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
