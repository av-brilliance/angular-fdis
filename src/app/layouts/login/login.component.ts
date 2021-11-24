

  import { Component, OnInit } from '@angular/core';
// import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg:string;
  user:any={
    username:"",
    password:""
  }
  constructor(private _router : Router) { }

  ngOnInit() {
  }
  login(){
      this._router.navigate(["/dashboard"]);
   
  }

}
