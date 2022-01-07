import { Component, OnInit } from '@angular/core';
import {UserService} from "../../Services/user.service";
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent implements OnInit {
 userId:string ='';
  constructor(

    private APIService : UserService,
    private activatedRouter:ActivatedRoute
  
  ) { }

  ngOnInit():void{
    this.activatedRouter.params.subscribe(data =>
      {
        this.userId=data.id;
        console.log("zzzzzzzzzzzzz",this.userId)
      })

    this.APIService.getUser(this.userId).subscribe(data=>{
      console.log(data);
    })
      
  }


//   getUse(this.userId) 
//   {

//     this.APIService.getUsers({}).subscribe(
//       res => { 
//         // this.foundBooks = res;

        
// //        const  x=res;
// //          this.users= x;
// //  this.foundBooks=this.users.res
 
// //          console.log(this.foundBooks)
//        },
//       err => console.error(err), 
//       () => console.log('getBooks completed') 
//       );
//  }
}
