import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

const importsExportsModules = [
  MatDialogModule,
  FormsModule,
  MatIconModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...importsExportsModules
  ],
  exports:[
    ...importsExportsModules
  ]
})
export class SharedModule {
 }
