import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
constructor(
  public id:number,
 // public username: String,
 public done:boolean,
 public description:string,
 public targetDate:Date
){}
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

   todos!: Todo[];
  message: string="";
  //  [

  //   new Todo(1,false,"Learn to dance",new Date()),
  //   new Todo(2,false,"Learn spring boot and Angular",new Date()),
  //   new Todo(3,true,"Visit India",new Date()),
  //   new Todo(4,false,"Be a full stack java developer",new Date()),
  //   new Todo(5,false,"Learn to dance",new Date()),
    
  // ]
  

  constructor(
    private todoService:TodoDataService
  ) { }

  ngOnInit(): void {
    this.todoService.retrieveAllTodos('akhi').subscribe(
      (      response: Todo[])=>{
        this.todos=response;
      }
    )
  }
  deleteTodo(id: any){
    this.todoService.deleteTodo('akhi',id).subscribe(response=> this.message=`Delete Successful ${id}`);
  }

}
