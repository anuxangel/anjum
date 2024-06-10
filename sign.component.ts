import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  submitted = false;

  constructor(private router: Router) {}

  onSubmit(username: string, newPassword: string, confirmPassword: string) {
    this.submitted = true;

    if (!username || !newPassword || !confirmPassword) {
      return;
    }

    if (newPassword !== confirmPassword) {
      return;
    }

    // If validation passes, navigate to the home page
    this.router.navigate(['/home']);
  }
}

