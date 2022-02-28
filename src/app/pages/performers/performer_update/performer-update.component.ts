import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from "../../../Services/user.service";
import {  Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray
} from "@angular/forms";

@Component({
  selector: 'app-performer-update',
  templateUrl: './performer-update.component.html',
  styleUrls: ['./performer-update.component.css']
})
export class PerformerUpdateComponent implements OnInit {
  userId:string='';
  BranchName:string='';
  formm: FormGroup;

  websiteList: any = [
    { id: 1, name: 'Active' },
    // { id: 2, name: 'InActive' },
    // { id: 3, name: 'NiceSnippets.com' }
  ];

  public ClientForm: FormGroup;

  constructor(
    public form: FormBuilder,
    private APIService : UserService,
    private activatedRouter:ActivatedRoute,
    private router: Router,
    
    // public buildForm() 
  
  ) 
    {
      this.formm = this.form.group({
        website: this.form.array([], [Validators.required])
      })
    }
  

  // constructor() { }

  ngOnInit(): void {
    this.buildForm();

      
  }


  onSubmit() {

    console.log('form', this.ClientForm.value)
    console.log(this.formm.value);

  
    // this.APIService.PerformerCreate(this.userId,this.ClientForm.value).subscribe(data=>{
    //   console.log(data);
    // })
    //   this.router.navigateByUrl('/Branch');
  }

  

 
  public buildForm() {
    this.ClientForm = this.form.group({

    UserName: new FormControl ('', [Validators.required]),
    Email: new FormControl ('', [Validators.required]),
    FirstName: new FormControl ('', [Validators.required]),
    LastName: new FormControl ('', [Validators.required]),
    Password: new FormControl ('', [Validators.required]),
    ConfirmPassword: new FormControl ('', [Validators.required]),
    Phone: new FormControl ('', [Validators.required]),
    Mobile: new FormControl ('', [Validators.required]),
    Clients: new FormControl ('', [Validators.required]),
    Active: new FormControl ('', [Validators.required]),
    // website: this.formBuilder.array([], [Validators.required]),
   
    TypeOfPerformer: new FormControl ('', [Validators.required]),
    
  });

  }

  onCheckboxChange(e) {
    const website: FormArray = this.formm.get('website') as FormArray;
  
    if (e.target.checked) {
      website.push(new FormControl(e.target.value));
    } else {
       const index = website.controls.findIndex(x => x.value === e.target.value);
       website.removeAt(index);
    }
  }
  
  
}