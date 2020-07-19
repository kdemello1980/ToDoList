import { Component, OnInit, Input } from '@angular/core';
import {TodosService} from '../services/todos.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})


export class DeleteTaskComponent implements OnInit {

  @Input() id: number;

  constructor(private todos: TodosService) { }
  /*
  delete(): void {
    console.log(this.id);
    this.todos.deleteTodo(this.id).subscribe(
      response => {
      console.log(response);
      }
    );
  }
  */

  ngOnInit(): void {
  }

}
