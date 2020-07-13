import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
