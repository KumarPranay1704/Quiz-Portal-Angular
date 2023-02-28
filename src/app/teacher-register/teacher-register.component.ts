import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {

  constructor(private userService:UserService) { }
  name!:string;
  email!:string;
  password!:string
  message:string = '';

  ngOnInit(): void {
  }
  onSubmitForm(registerInfo:NgForm){
    const regInfo={
      name:this.name,
      email:this.email,
      password:this.password
    }
    this.userService.teacherRegister(regInfo).subscribe(response=>{
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
