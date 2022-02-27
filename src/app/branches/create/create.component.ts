import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from "../../Services/user.service";
import {  Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})



export class CreateBranchComponent implements OnInit {
  userId:string='';
  BranchName:string='';
 

  public ClientForm: FormGroup;

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

      
  }


  onSubmit() {

    console.log('form', this.ClientForm.value)
  
    this.APIService.BranchCreate(this.userId,this.ClientForm.value).subscribe(data=>{
      console.log(data);
    })
      this.router.navigateByUrl('/Branch');
      // this.modal.close(); // close the modal when everything else is done

  }

  

 
  public buildForm() {
    this.ClientForm = this.form.group({
      BranchName: new FormControl ('', [Validators.required])
    });

  }
  
}