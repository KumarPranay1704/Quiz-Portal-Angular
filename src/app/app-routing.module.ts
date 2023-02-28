import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/services/auth-guard.service';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './loggedIn/admin/admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';

const routes: Routes = [

  {path:"",redirectTo:'home',pathMatch:'full'},

  {path:"home",component:HomeComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'adminRegister',component:AdminRegisterComponent},
  {path:'login',component:LoginComponent},

  {path:'loggedIn/admin/home',component:AdminHomeComponent},
  {path:'loggedIn/admin/teacherRegister',component:TeacherRegisterComponent,canActivate:[AuthGuardService]},
  {path:'loggedIn/admin/studentRegister',component:StudentRegisterComponent,canActivate:[AuthGuardService]},


  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
