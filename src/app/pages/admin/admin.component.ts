import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";


import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import {UserService} from "../../Services/user.service";
@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'admin.component.html'
})

export class AdminComponent{

     users:any=[];
     foundBooks:any=[];
    
  constructor(
    private APIService : UserService,
    
    ){
     }
    
    ngOnInit() {
        this.getUse()
      
    }

      getUse() 
      {

        this.APIService.getAdmin('').subscribe(
          res => { 
            // this.foundBooks = res;
             const  x=res;
             this.users= x;
             this.foundBooks=this.users.data
      console.log(this.users)
             console.log(this.foundBooks)
           },
          err => console.error(err), 
          () => console.log('getBooks completed') 
          );
     }
}

 