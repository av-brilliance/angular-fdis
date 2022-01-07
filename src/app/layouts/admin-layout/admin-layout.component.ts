import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  constructor(private _route : ActivatedRoute){}
  ngOnInit() { }
}
