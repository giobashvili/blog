import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import { ServiceService } from "../../Service/service.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  category;
  title;
  desc;
  story;
  constructor(
    private service: ServiceService,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
      this.category =this.data.category;
      this.title = this.data.title;
      this.desc = this.data.desc;
      this.story = this.data.story;
      this.data.id;
      this.data.email;
      this.data.author;
      this.data.image;

  }
  updata(){
    this.service.updata(this.category,
                        this.title,
                        this.desc,
                        this.story,
                        this.data.id,
                        this.data.email,
                        this.data.author,
                        this.data.image).subscribe(res =>{

    })
  }

}
