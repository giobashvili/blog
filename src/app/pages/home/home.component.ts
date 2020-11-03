import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../Service/service.service";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogReadComponent} from "../dialog-read/dialog-read.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogDatas:any = [];
  constructor(
    private service:ServiceService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getAllBlog();

  }

  getAllBlog() {
    this.service.getAllBlogs().subscribe(res => {
      this.blogDatas = res;
      console.log(this.blogDatas)
    });
  }

  openDialog(data): void {
    this.dialog.open(DialogReadComponent, {
      width: '500px',
      height:'500px',
      data:data
    });
  }

}
