import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getPerformers(data:any): Observable<any> {
    return this.http.get("http://18.156.200.144:8008/user_performers/get", data);
  }
  
  
  getBranch(data:any): Observable<any> {
    return this.http.get("http://18.156.200.144:8008/user_branch/get", data);
  }
  


  getUsers(data:any): Observable<any> {
    return this.http.get("http://18.156.200.144:8008/user/get", data);
  }
  
  getUsers_Client(): Observable<any> {
    return this.http.get("http://18.156.200.144:8008/user_client/get");
  }


  getUsers_Client_byId(_id): Observable<any> {
    
    // _id=req.params._id;
    return this.http.get("http://18.156.200.144:8008/user_client/byid/"+_id);
  }
  
 

  // pageEmployes:any={};
  
  // getUsers():Observable<any>{    
  //   this.http.get("http://localhost:8008/user/get").subscribe(
  //    data=>{
  //      console.log(data);
  //      this.pageEmployes = data;

  //    }, err=>{
  //      console.log(err);
  //    }
  //  );
  //  return this.pageEmployes;
//  }
} 
