import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getUsers() {
    return this.http.get('http://localhost:3000/users');
  }

  // tslint:disable-next-line:typedef
  registration(registr){
    registr = {
      username: registr.username,
      email: registr.email,
      password: registr.password
    };
    return this.http.post('http://localhost:3000/users', registr);
  }
}
