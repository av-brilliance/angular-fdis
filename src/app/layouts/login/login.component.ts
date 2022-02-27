import { Component, OnInit } from '@angular/core';
// import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AuthService } from 'app/Services/Login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  users:any=[];
  foundBooks:any=[];

  constructor(private router : Router,
    private APIService : AuthService) { }

  ngOnInit() {
    this.getUse()
  }


  getUse() 
  {

    this.APIService.getSuper({}).subscribe(
      res => { 
         console.log(res)
         this.users=res.data;
         console.log(this.users)

       },
      err => console.error(err), 
      () => console.log('getBooks completed') 
      );
 }




  login= function () {
    this.router.navigateByUrl('/dashboard');
};


}
