import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username: any)
  {
    return this.http.get<Todo[]>(`http://localhost:9090/user/${username}/todos`);
  }
}
