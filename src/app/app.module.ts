import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainTopbarComponent } from './components/main-topbar/main-topbar.component';
import { LoginComponent } from './components/login/login.component';

import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

import { MaterialModule } from './material-module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
//import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { AlertComponent } from './components/alert/alert.component';
import { UsersModule } from './modules/users/users.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PlansComponent } from './components/plans/plans.component';
import { ProfileComponent } from './components/profile/profile.component';

// Modules
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    MainFooterComponent,
    MainTopbarComponent,
    LoginComponent,
    AlertComponent,
    CarouselComponent,
    PlansComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    MaterialModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
