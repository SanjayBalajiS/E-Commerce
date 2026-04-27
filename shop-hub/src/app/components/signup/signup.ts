import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, Routes } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  
 
  name = '';
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  signup() {
    if (!this.name || !this.email || !this.password) {
      alert('Fill all fields');
      return;
    }

    const success = this.auth.signup({
      name: this.name,
      email: this.email,
      password: this.password
    });

    if (success) {
      alert('Signup successful! Please login.');
      this.router.navigate(['/login']);  
    } else {
      alert('User already exists!');
    }
  }
}
