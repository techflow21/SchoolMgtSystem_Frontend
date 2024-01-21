import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'add', component: AddEditComponent },
  { path: 'edit/:id', component: AddEditComponent },
];

// const routes: Routes = [
//   {
//     path: '',
//     component: AuthLayoutComponent,
//     children: [
//       { path: '', component: UsersComponent },
//       { path: 'add', component: AddEditComponent },
//   { path: 'edit/:id', component: AddEditComponent },
//     ],
//   },
// ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
