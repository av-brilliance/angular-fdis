import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../Services/user.service";
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-remove-admin',
  templateUrl: './remove-admin.component.html'
})
export class RemoveAdminComponent implements OnInit {
 userId:string ='';
  
  constructor(
    private APIService : UserService,
    private activatedRouter:ActivatedRoute,
    public form: FormBuilder,
    private router: Router
  
  ) { }

  ngOnInit():void{
    this.activatedRouter.params.subscribe(data =>
      {
        this.userId=data.id;
        console.log("XYZ",this.userId)
      })

      
  }


//   Delete() 
//   {

//     this.APIService.BranchDelete(this.userId).subscribe(data=>{
//       console.log(data);
//     })
//     this.router.navigateByUrl('/Branch');

    
// }
}
