import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  adminRegister(registerInfo:any){
    return this._http.post<{message:string}>(environment.baseUrl+'adminRegister',registerInfo);
  }
  adminLogin(loginInfo:any){
    return this._http.post<{message:string,userData:any,token:string}>(environment.baseUrl+'adminLogin',loginInfo);
  }
  studentRegister(registerInfo:any){
    return this._http.post<{message:string,userData:any}>(environment.AdminbaseUrl+'studentRegister',registerInfo,{
      headers:new HttpHeaders().set('auth-token',localStorage.getItem('token')!)
  });
  }
  teacherRegister(registerInfo:any){
    return this._http.post<{message:string,userData:any}>(environment.AdminbaseUrl+'teacherRegister',registerInfo,{
      headers:new HttpHeaders().set('auth-token',localStorage.getItem('token')!)
  });
  }
  studentLogin(loginInfo:any){
    return this._http.post<{message:string,userData:any,token:string}>(environment.baseUrl+'studentLogin',loginInfo);
  }
  teacherLogin(loginInfo:any){
    return this._http.post<{message:string,userData:any,token:string}>(environment.baseUrl+'teacherLogin',loginInfo);
  }
  login(loginInfo:any){
    return this._http.post<{message:string,userData:any,token:string}>(environment.baseUrl+'login',loginInfo);
  }

  isLoggedIn(){
    if(localStorage.getItem('token') == null){
      return false;
    }
    else{
      return !!localStorage.getItem('token');
    }
  }
}
