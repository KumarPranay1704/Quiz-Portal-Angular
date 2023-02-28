import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  constructor(private userService:UserService) { }
  email!:string;
  password!:string
  message:string = '';

  ngOnInit(): void {
  }

  onSubmitForm(registerInfo:NgForm){
    const regInfo={
      email:this.email,
      password:this.password
    }
    this.userService.adminRegister(regInfo).subscribe(response=>{
      this.message = response.message;
    },err=>{
      if(err.error.message === undefined){
          this.message = err.error
      }
      else{
          this.message = err.error.message
      }
    })
  }

}
