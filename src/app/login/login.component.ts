import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin=false;
  username="";
  password="";
  errorMessage="Invalid Credentials .Please check again";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  handleLogin(){
    if(this.username==="Akhi" && this.password==="asdf")
    {
      this.router.navigate(['welcome'])
      this.invalidLogin=false;
    }
    else
    {
      this.invalidLogin=true;
    }
 
  }

}
