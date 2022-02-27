import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {  Router } from '@angular/router';


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
    userId:string;
    users:any=[];
    foundBooks:any=[];
    httpBL:Boolean;

   
 constructor(

   private APIService : UserService,
   public form: FormBuilder,
   private activatedRouter:ActivatedRoute,
   private router: Router
   ){
    }
   
   ngOnInit() {
       this.getBranch()
       this.activatedRouter.params.subscribe(data =>
        {
          this.userId=data.id;
          console.log("xyz",this.userId)
        })
  }


   getBranch() 
   {

    this.httpBL = true;
     this.APIService.getBranch({}).subscribe(
       res => { 
          const  x=res;
          this.users= x;
          this.foundBooks=this.users.data.rows
  
          console.log(this.foundBooks)
          
    this.httpBL = true;
        },
       err => console.error(err), 
       () => console.log('get completed') 
       );
  }

}