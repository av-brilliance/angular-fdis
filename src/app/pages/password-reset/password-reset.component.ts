import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from "../../Services/user.service";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';




@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  userId:string ='';
  Password:string='';
  details = [
    {
      "Password": "123"
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
    // public buildForm() 
  
  ) { }
  ngOnInit(): void {
    this.buildForm();
    this.activatedRouter.params.subscribe(data =>
      {
        this.userId=data.id;
        console.log("zzzzzzzzzzzzz",this.userId)
      })


    // this.Password='123';
    // this.APIService.updatePass(this.userId,this.ClientForm.value).subscribe(data=>{
    //   console.log(data);
    // })
      
  }


  public onSubmit() {

    console.log('form', this.ClientForm.value)
  
    this.APIService.updatePass(this.userId,this.ClientForm.value).subscribe(data=>{
      console.log(data);
    })

  }

  public buildForm() {
    this.ClientForm = this.form.group({
      Password: ['', [Validators.required]],
      RePassword: ['', [Validators.required]],
    });

  }
  
}
