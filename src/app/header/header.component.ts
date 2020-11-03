import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username;
  constructor(
    private RT: Router
  ) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username')
  }

  logOut() {
    localStorage.removeItem('email',);
    localStorage.removeItem('username',);
    this.RT.navigate(['/']);
  }
}

