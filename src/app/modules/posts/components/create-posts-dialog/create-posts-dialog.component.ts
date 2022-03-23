import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
enum FileTypes { // we will use it for determine which type for files we are using
  VIDEOS,
  IMAGES
}

@Component({
  selector: 'app-create-posts-dialog',
  templateUrl: './create-posts-dialog.component.html',
  styleUrls: ['./create-posts-dialog.component.scss']
})
export class CreatePostsDialogComponent implements OnInit {
  files:  Array<any> = []; // for uploaded image
  filesUrls: {url: string, name: string, id: number}[] = [];
  fileTypes = FileTypes;
  activeFilesType: FileTypes = FileTypes.IMAGES;

  constructor(private readonly _fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    // not require, but we will use it for backend
  }

  removeFile(name: string){  // this implementation has a problem if two files have the same name, could be improve on the future
    this.filesUrls = this.filesUrls.filter(res=> res.name !== name);
    this.files = this.files.filter(res=> res.name !==name)
  }

  post(){
    // not required
  }

  uploadFiles(event: any, fileType: FileTypes){
    this.activeFilesType= fileType;

    if(event.target.files){
      this.files = this.files.length? this.files.concat(Array.from( event.target.files)) :Array.from( event.target.files);
      // we can chek for imagefiles length and make any action if it is more than 5

      for(let i = 0 ; i< this.files.length; i++){
        if(i>4){
          break;
          // can take any other action
        }
        this.filesUrls = []
        var render = new FileReader();
        render.readAsDataURL(this.files[i]);
        render.onload = (e: any) =>  this.filesUrls.push({url: e.target.result , name :this.files[i].name, id: i}) ;
      }

    }

  }
}
