import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
public loginStatus : boolean = false;
  constructor() { }
  
  isAuthenticated():Promise<boolean>{
    return new Promise((resolve, reject)=>{
     setTimeout(()=>{
     /* 3 */ this.loginStatus =localStorage.getItem('token') ? true : false;
       resolve(this.loginStatus)
     },20)
    })
   }
  LogIn(){
    // {email, password} >> API call user role and barier token is important to give the access of the particular component on the basis of that we deside who can access particular component 
    this.loginStatus = true;
    /* we login >> we get responce >> and we got the JWT Token */

   /* 3 */ let token = "JWT token";
   /* 3 */ localStorage.setItem("token", token);
  }

  LogOut(){
    this.loginStatus = false;
   /* 3 */ localStorage.removeItem("token");
  }

 
}
