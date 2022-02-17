import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos=[
    {id:1, description:"Learn to dance"},
    {id:2, description:"Learn spring boot and Angular"},
    {id:3, description:"Be a full stack java developer"},
    {id:2, description:"Visit India"}
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
