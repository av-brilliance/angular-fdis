import { Component,OnInit } from '@angular/core';
import { UserService } from 'app/Services/user.service';

declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'clients.component.html'
})

export class ClientsComponent implements OnInit {
    userData:any={};
    foundBooks:any=[];
    _id:any;
   
 constructor(
   private APIService : UserService,
   
   ){
    }
   
   ngOnInit() {
       this.getUse();
      //  this.getbyUse(this._id);
     
   }





   getUse(){
       // let  user;
       this.APIService.getUsers_Client().subscribe(res=>{
        //  console.log(res);
         this.userData=res.data.order;
       
         // document.getElementById(user).innerHTML = this.userData;
         console.log(this.userData)
       
       })
     } 


    //  getbyUse()
    //  {

    //    this.APIService.getUsers_Client_byId('').subscribe(
    //      res => { 
    //        this.foundBooks = res;
    //         console.log(res)
          
    //         // this.foundBooks.data.orders[0];
    //         // console.log("bhjhj",this.foundBooks.orders[0])
    //       },
    //      err => console.error(err), 
    //      () => console.log('get completed') 
    //      );
    // }
}
