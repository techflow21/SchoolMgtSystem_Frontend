import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { MaterialModule } from '@app/material-module';

@NgModule({
  declarations: [UsersComponent, AddEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    UsersRoutingModule,
  ],
})
export class UsersModule {}
