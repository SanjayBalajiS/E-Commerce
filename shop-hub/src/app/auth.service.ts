import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser') || 'null');
}

  // SIGNUP
  signup(user: any): boolean {
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    // check existing user
    const exists = users.find((u: any) => u.email === user.email);

    if (exists) {
      return false;
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    return true;
  }

  // LOGIN
  login(email: string, password: string): boolean {
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find(
      (u: any) =>
        u.email.trim() === email.trim() &&
        u.password.trim() === password.trim()
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }

    return false;
  }

  // CHECK LOGIN
  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  // LOGOUT
  logout() {
    localStorage.removeItem('currentUser');
  }
}