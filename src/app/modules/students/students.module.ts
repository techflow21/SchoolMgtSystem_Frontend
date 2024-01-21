import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { AddEditComponent } from './add-edit/add-edit.component';



@NgModule({
  declarations: [
    StudentsComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
