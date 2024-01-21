import { Component } from '@angular/core';
import { User } from '@app/core/interfaces/user';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user: User | null;

  constructor(private authService: AuthService) {
    this.user = this.authService.userValue;
  }
}
