import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RegistrationService} from '../../Service/RegistrationService/registration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  userData: any = [];
  errorMess = false;
  constructor(
    private formBuilder: FormBuilder,
    private registr: RegistrationService,
    private RT: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required]
    });
    this.getUsers();
  }
  // Gat All User //
  getUsers() {
    this.registr.getUsers().subscribe(res => {
      this.userData = res;
      console.log(this.userData);
    });
  }



  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
    this.check();
  }
  // check email and passsword //
  check() {
    for (let i = 0; i < this.userData.length; i++){
        const element = this.userData[i];
        if ( element.email === this.loginForm.value.email && element.password === this.loginForm.value.password){
          this.RT.navigate(['/Home']);
          return false;
        }
      }
    this.errorMess = true;
  }
}
