import { Injectable ,Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateBranchComponent implements OnInit {
  branch: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void 
  { 
    this.createForm();
  }

  createForm() {
    ( this.branch = this.fb.group({
      UserName : [""],
    }))}


    save() {
      
      let xyzOrder= this.branch.value;
      console.log(xyzOrder)
           }
      
    
}
