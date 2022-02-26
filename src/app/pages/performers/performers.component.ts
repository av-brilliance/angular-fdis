import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/Services/user.service';
@Component({
  selector: 'app-performers',
  templateUrl: './performers.component.html',

})
export class PerformersComponent implements OnInit {

  users:any=[];
  foundBooks:any=[];
 
constructor(
 private APIService : UserService,
 
 ){
  }
 
 ngOnInit() {
     this.getUse()
   
 }





 // getUse(){
 //     // let  user;
 //     this.APIService.getUsers({}).subscribe(res=>{
 //       console.log(res);
 //       this.userData=res;
     
 //       // document.getElementById(user).innerHTML = this.userData;
 //       // console.log(user)
     
 //     })
 //   } 


   getUse() 
   {

     this.APIService.getPerformers({}).subscribe(
       res => { 
         // this.foundBooks = res;
        const  x=res;
          this.users= x;
  this.foundBooks=this.users.data
  
          console.log(this.foundBooks)
        },
       err => console.error(err), 
       () => console.log('getBooks completed') 
       );
  }
}

