import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-read',
  templateUrl: './dialog-read.component.html',
  styleUrls: ['./dialog-read.component.css']
})
export class DialogReadComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data
  ) { }
dataStory: any = [];
  ngOnInit(): void {
    this.dataStory = this.data;
  }

}
