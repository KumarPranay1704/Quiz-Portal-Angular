import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }
  username !:string;
  password !:string;
  message:string = '';
  ngOnInit(): void {
  }
  onSubmitForm(data:any){
    const loginInfo = {
      username:this.username,
      password:this.password
    }
    this.userService.login(loginInfo).subscribe(response=>{
      this.message = response.message
    },err=>{
      if(err.error.message === undefined)
          this.message = err.error
      else
          this.message = err.error.message
    })
  }

}
