import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../Service/RegistrationService/registration.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  errorMess = false;
  errormessemail = false;
  usersData: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private RT: Router
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: [null],
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required],
      confirmePassword: [null, Validators.required]
    });
    this.getUsers();
  }

  getUsers(){
    this.registrationService.getUsers().subscribe(res => {
      this.usersData = res;
      console.log(this.usersData);
    });
  }
  registration(registrationForm){
    this.registrationService.registration(registrationForm.value).subscribe(res => {
    });
  }

  submit(registrationForm) {
    this.Check(registrationForm);

  }

  Check(registrationForm){
    for (let i = 0; i < this.usersData.length; i++) {
      const element = this.usersData[i];
      if (element.email === registrationForm.value.email) {
        this.errormessemail = true;
        this.errorMess = false;
        return false;
      }
    }
    if (this.registrationForm.value.password !== this.registrationForm.value.confirmePassword) {
        this.errorMess = true;
        this.errormessemail = false;
        return false;
      }

    this.registration(registrationForm);
    this.RT.navigate(['/']);
  }
}
