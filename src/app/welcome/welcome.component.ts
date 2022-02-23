import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WelcomeDataServiceService } from '../service/data/welcome-data-service.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  messageFromService="";
  errorFromService="";

  constructor(private service: WelcomeDataServiceService,) { }

  ngOnInit(): void {
  }
  getWelcomeMessage(){
    this.service.executeHelloBeanService().subscribe(response => 
      this.messageFromService=response.message, error=>this.errorFromService=error.error.message
      );
  }

  // handleSuccesfulResponse(response: Object){
  //   console.log(response.message);
  // }
}
