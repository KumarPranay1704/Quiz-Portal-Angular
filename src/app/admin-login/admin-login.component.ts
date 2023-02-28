import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public username !:string;
  public password !:string;
  public message:string = '';
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmitForm(data:any){
    const loginInfo = {
      username:this.username,
      password:this.password
    }
    this.userService.adminLogin(loginInfo).subscribe(response=>{
      this.message = response.message
      localStorage.setItem('token',response.token)
      localStorage.setItem('uid',response.userData._id)
      localStorage.setItem('userType',response.userData.userType)
      this.router.navigate(['/loggedIn/admin/home'])
    },err=>{
      if(err.error.message === undefined)
          this.message = err.error
      else
        this.message = err.error
    })
  }
}
