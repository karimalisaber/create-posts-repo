import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeLineComponent } from './components/time-line/time-line.component';

const routes: Routes = [
  {path: '', component: TimeLineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
