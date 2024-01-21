import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AuthService } from './core/services/auth.service';
import { User } from './core/interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'School Management System';

  ngOnInit(): void {
    initFlowbite();
  }

  // user?: User | null;

  // constructor(private authService: AuthService) {
  //   this.authService.user.subscribe((x) => (this.user = x));
  // }

  // logout() {
  //   this.authService.logout();
  // }
}
