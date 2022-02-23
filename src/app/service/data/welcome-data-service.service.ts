import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataServiceService {

  constructor(private http:HttpClient,) { }

  executeHelloBeanService(){
    return this.http.get<HelloWorldBean>("http://localhost:9090/hello-world-bean");
  }
}
