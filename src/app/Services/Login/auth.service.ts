import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // apiUrl ='http://localhost:4002/api/v1/dashboard/SuperUsers';
  constructor(
    private http : HttpClient
  ) { }




  ////-------------get api for SuperUser Users----------------------------////
  getSuper(data:any): Observable<any>{
    return this.http.get("http://localhost:4002/api/v1/dashboard/SuperUsers");
  }
  
  // getAll(){
  //   return this._http.get<any>(this.apiUrl+"/api/user");

  // }
  // get(id:any){
  //   return this._http.get<any>(this.apiUrl+"/api/user/"+id);

  // }
  // delete(id:any){
  //   return this._http.delete<any>(this.apiUrl+"/api/user/"+id);

  // }
  // update(id:any, obj:any){
  //   return this._http.put<any>(this.apiUrl+"/api/user/"+id, obj);

  // }

  // updatePass(id:any, obj:any){
  //   return this._http.post<any>(this.apiUrl+"/api/userinfo/changepass/"+id, obj);
  // }
  
  

}