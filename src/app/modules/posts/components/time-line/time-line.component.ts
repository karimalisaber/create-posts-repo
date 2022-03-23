import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostsDialogComponent } from '../create-posts-dialog/create-posts-dialog.component';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {

  constructor(public readonly _dialog: MatDialog) {}

  ngOnInit(): void {
    this.createPost()
  }

  createPost(){
    this._dialog.open(CreatePostsDialogComponent, {
      width: '500px'
    });

  }
}
