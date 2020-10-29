import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Auth/login/login.component';
import {RegistrationComponent} from './Auth/registration/registration.component';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'Home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
