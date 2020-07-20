/**
 * Modules
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { SelectTaskComponent } from './select-task/select-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';

/**
 * Services
 */
import { TodosService } from './services/todos.service';
import { TaskListComponent } from './task-list/task-list.component';

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
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    UpdateTaskComponent,
    SelectTaskComponent,
    DeleteTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    // FormGroup,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: 'udpate-task', component: UpdateTaskComponent },
      { path: '**', redirectTo: 'update-task'}

    ])
  ],
  providers: [TodosService],
  bootstrap: [AppComponent],
  // exports: [MatSort]
})
export class AppModule { }
