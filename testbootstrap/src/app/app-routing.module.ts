import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentformComponent } from './studentform/studentform.component';
import { LoginComponent } from './login/login.component';
import { OurtutorsComponent } from './ourtutors/ourtutors.component';
import { OurservicesComponent } from './ourservices/ourservices.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'studentform', component: StudentformComponent },
  { path: 'login', component: LoginComponent}, 
  { path: 'ourtutors', component: OurtutorsComponent }, 
  { path: 'ourservices', component: OurservicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
