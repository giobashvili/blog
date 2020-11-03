import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../../Service/service.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-blogadd',
  templateUrl: './blogadd.component.html',
  styleUrls: ['./blogadd.component.css']
})
export class BlogaddComponent implements OnInit {
  email:any = localStorage.getItem('email');
  author:any = localStorage.getItem('username');
  data;
  constructor(
    private  service: ServiceService,
    private RT: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  image(event) {

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.data = reader.result;
      console.log(this.data);
    };
  }

  submit(f) {
    console.log(this.data);
      this.service.addBlog(f.value).subscribe(res => {

      })
      this.RT.navigate(['/myBlog'])
    }
}
