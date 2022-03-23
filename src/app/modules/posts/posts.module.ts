import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { CreatePostsDialogComponent } from './components/create-posts-dialog/create-posts-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    TimeLineComponent,
    CreatePostsDialogComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ],
  entryComponents:[
    CreatePostsDialogComponent

  ]
})
export class PostsModule { }
