import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TutorformComponent } from './tutorform/tutorform.component';
import { StudentformComponent } from './studentform/studentform.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'contact', component: ContactComponent},
  { path: 'tutorform', component: TutorformComponent},
  { path: 'studentform', component: StudentformComponent}
];
  

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
