import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from "../../Services/user.service";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import {  Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  userId:string='';
  BranchName:string='';
  details =[
    {
      
    }
  ]

  public ClientForm: FormGroup;

  public formErrors = {
    lastName: '',
    firstName: '',
    ssnKey: '',
    phone: '',
    email: '',
    ssn: '',
  };
  constructor(
    public form: FormBuilder,
    private APIService : UserService,
    private activatedRouter:ActivatedRoute,
    private router: Router
    // public buildForm() 
  
  ) { }
  

  // constructor() { }

  ngOnInit(): void {
    this.buildForm();
    this.activatedRouter.params.subscribe(data =>
      {
        this.userId=data.id;
        console.log("xyz",this.userId)
      })


    // this.Password='123';
    // this.APIService.updatePass(this.userId,this.ClientForm.value).subscribe(data=>{
    //   console.log(data);
    // })
      
  }


  public onSubmit() {

    console.log('form', this.ClientForm.value)
  
    this.APIService.BranchUpdate(this.userId,this.ClientForm.value).subscribe(data=>{
      console.log(data);
    })
      this.router.navigateByUrl('/Branch');
  }

  

 
  public buildForm() {
    this.ClientForm = this.form.group({
      BranchName: ['', [Validators.required]],
    });

  }
  
}

