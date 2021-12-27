import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user.service';



declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'branches.component.html'
})

export class BranchesComponent implements OnInit{
 
    users:any=[];
    foundBooks:any=[];
    httpBL:Boolean;

   
 constructor(
   private APIService : UserService,
   
   ){
    }
   
   ngOnInit() {
       this.getBranch()
     
   }


   getBranch() 
   {

    this.httpBL = true;
     this.APIService.getBranch({}).subscribe(
       res => { 
         // this.foundBooks = res;
          // console.log(res)
          const  x=res;
          this.users= x;
          this.foundBooks=this.users.data.order
  
          console.log(this.foundBooks)
          
    this.httpBL = true;
        },
       err => console.error(err), 
       () => console.log('get completed') 
       );
  }
}