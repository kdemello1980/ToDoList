/**
 * Modules
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

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

/**
 * Material Modules
 */
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    UpdateTaskComponent,
    SelectTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: 'udpate-task', component: UpdateTaskComponent },
      { path: '**', redirectTo: 'update-task'}

    ])
  ],
  providers: [TodosService, UpdateTaskService, SelectTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
