import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PhotosComponent } from './photos/photos.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminHomeComponent } from './loggedIn/admin/admin-home/admin-home.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CarouselComponent,
    PhotosComponent,
    FooterComponent,
    LoginComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    PagenotfoundComponent,
    AdminHomeComponent,
    StudentRegisterComponent,
    TeacherRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
