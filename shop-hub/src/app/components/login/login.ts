import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, Routes } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

   email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/']);   // already logged in
    }
  }

  login() {
    if (!this.email || !this.password) {
      alert('Fill all fields');
      return;
    }

    const success = this.auth.login(this.email, this.password);

    if (success) {
      alert('Login successful');
      this.router.navigate(['/']);  
    } else {
      alert('Invalid email or password');
    }
  }
}
