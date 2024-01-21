import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes/classes.component';
import { AddEditComponent } from './add-edit/add-edit.component';



@NgModule({
  declarations: [
    ClassesComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClassesModule { }
