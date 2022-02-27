import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../Services/user.service";
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
