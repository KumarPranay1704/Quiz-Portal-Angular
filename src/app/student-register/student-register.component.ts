import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  constructor(private userService:UserService) { }
  name!:string;
  email!:string;
  password!:string
  message:string = '';
  branch!:string;
  date!:string;

  ngOnInit(): void {
  }

  onSubmitForm(registerInfo:NgForm){
    const regInfo={
      name:this.name,
      email:this.email,
      password:this.password,
      branch:this.branch,
      joining:this.date
    }
    this.userService.studentRegister(regInfo).subscribe(response=>{
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
