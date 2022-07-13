import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/auth/authentication.service';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  constructor(private router: Router, private authService: AuthenticationService) {}

  navigateTo(value:string) {
    this.router.navigate(['../', value]);
  }

  logout() {
    this.authService.logout();
  }
}


