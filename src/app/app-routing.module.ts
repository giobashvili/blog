import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Auth/login/login.component';
import {RegistrationComponent} from './Auth/registration/registration.component';
import {HomeComponent} from './pages/home/home.component';
import {BlogaddComponent} from "./pages/blogadd/blogadd.component";
import {MyblogesComponent} from "./pages/mybloges/mybloges.component";

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'AddBlog', component: BlogaddComponent },
  { path: 'myBlog', component: MyblogesComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Registration', component: RegistrationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
