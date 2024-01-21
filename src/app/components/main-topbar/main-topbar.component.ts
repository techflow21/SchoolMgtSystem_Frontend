import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { User } from '@app/core/interfaces/user';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-main-topbar',
  templateUrl: './main-topbar.component.html',
  styleUrls: ['./main-topbar.component.scss'],
})
export class MainTopbarComponent {
  isMenuOpen = false;
  user?: User | null;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private authService: AuthService) {
    this.authService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.authService.logout();
  }
}
