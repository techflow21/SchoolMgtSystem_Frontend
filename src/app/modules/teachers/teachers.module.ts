import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers/teachers.component';
import { AddEditComponent } from './add-edit/add-edit.component';



@NgModule({
  declarations: [
    TeachersComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeachersModule { }
