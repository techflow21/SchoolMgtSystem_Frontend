import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { StudentComponent } from './modules/dashboard/dashboard-components/student/student.component';
import { ProfileComponent } from './components/profile/profile.component';

const usersModule = () =>
  import('./modules/users/users.module').then((x) => x.UsersModule);

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], },
      { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard], },
      {
        path: 'students', component: StudentComponent,canActivate: [AuthGuard],
      },
      { path: 'teachers', component: DashboardComponent },
      { path: 'fees', component: DashboardComponent },

      { path: 'expenses', component: DashboardComponent },
      { path: 'classes', component: DashboardComponent },
      { path: 'subjects', component: DashboardComponent },
      { path: 'results', component: DashboardComponent },
      { path: 'posts', component: DashboardComponent },
      { path: 'messages', component: DashboardComponent },
      { path: 'settings', component: DashboardComponent },
      { path: 'account', component: ProfileComponent },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
