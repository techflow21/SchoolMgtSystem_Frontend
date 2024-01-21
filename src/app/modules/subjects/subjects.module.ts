import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects/subjects.component';
import { AddEditComponent } from './add-edit/add-edit.component';



@NgModule({
  declarations: [
    SubjectsComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubjectsModule { }
