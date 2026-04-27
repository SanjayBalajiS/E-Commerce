import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar{

  user: any = null;

  // constructor(private auth: AuthService, private router: Router) {}

 constructor(private auth: AuthService, private router: Router) {
  this.user = this.auth.getCurrentUser();
}

  logout() {
    this.auth.logout();
    this.user = null;
    this.router.navigate(['/login']); 
  } 


}
