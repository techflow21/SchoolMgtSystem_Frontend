import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddEditComponent } from './add-edit/add-edit.component';



@NgModule({
  declarations: [
    ExpensesComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExpensesModule { }
