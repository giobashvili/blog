import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServiceService } from "../../Service/service.service";
import { HttpClient } from "@angular/common/http";
import {DialogComponent} from "../dialog/dialog.component";


@Component({
  selector: 'app-mybloges',
  templateUrl: './mybloges.component.html',
  styleUrls: ['./mybloges.component.css']
})
export class MyblogesComponent implements OnInit {
  dataBlogs:any = [];
  blog:any = [];
  error = false;
  email = localStorage.getItem('email')
  constructor(
    private service: ServiceService,
    private http: HttpClient,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.getServiceByEmail();
    setTimeout(()=>{                           //<<<---using ()=> syntax
      this.getBlogById();
    }, 1000);


  }

  getServiceByEmail(){
    this.service.getAllBlogs().subscribe(res => {
      this.dataBlogs = res;
    })
}
  getBlogById() {

    for( let i = 0; i < this.dataBlogs.length; i++ ) {
      const element = this.dataBlogs[i];
      if( element.email === this.email ) {
        this.blog.push(this.dataBlogs[i]);
      }
    }

    if(this.blog == 0) {
      this.error = true;
    }
  }

  delete(id){
    this.service.delete(id).subscribe(res =>{
    })
  }

  openDialog(data): void {
    this.dialog.open(DialogComponent, {
      width: '300px',
      height:'400px',
      data:data
    });
  }
}

