import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { idText } from 'typescript';

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
  
  getUser(userId:any): Observable<any> {
    return this.http.get("http://localhost:4002/api/v1/dashboard/SuperAdmin/"+userId);
  }
  // localhost:4002/api/v1/dashboard/SuperAdmin/

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

  remove(id:any):Observable<any>{
    
    return this.http.delete("http://localhost:4002/api/v1/dashboard/SuperAdmin/"+id)
  }

  updatePass(id:any,req:any){
    console.log(req)
    return this.http.patch<any>("http://localhost:4002/api/v1/dashboard/SuperAdmin/"+id, req);
  }


  // delete(id:any){
  //   return this.http.delete<any>(this.apiUrl+"/api/user/"+id);

  // }
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
