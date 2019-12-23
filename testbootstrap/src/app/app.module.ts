import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentformComponent } from './studentform/studentform.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OurtutorsComponent } from './ourtutors/ourtutors.component';
import { OurservicesComponent } from './ourservices/ourservices.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentformComponent,
    HomeComponent,
    LoginComponent,
    OurtutorsComponent,
    OurservicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
