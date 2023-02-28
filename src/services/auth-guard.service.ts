import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private userService:UserService,private router:Router) { }

  canActivate(){
    if(!this.userService.isLoggedIn()){
      this.router.navigate(['/adminLogin'])
      return false
    } 
    else{
      if(localStorage.getItem('userType')=='admin'){
        return true
      }
      this.router.navigate(['/loggedIn/admin/home'])
      return false
    }
  }
}
