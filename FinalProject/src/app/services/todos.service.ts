import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask } from '../task-list/task';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  baseUrl = 'http://ec2-18-191-63-47.us-east-2.compute.amazonaws.com:8080/todos';
  constructor(private httpCli: HttpClient) {  }

  postTodo(todoForm): Observable<string>{
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // ABSOLUTELY necessary. Allows control from the API
      })
    };
    // We send our 'todoForm' as the body of our request
    return this.httpCli.post<string>(this.baseUrl, todoForm, httpHead);
  }

  getTodos(): Observable<ITask[]>{
    // Our API needs a special HEAD to communicate.
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // ABSOLUTELY necessary. Allows control from the API
      })
    };

    return this.httpCli.get<ITask[]>(this.baseUrl, httpHead);
  }
}
