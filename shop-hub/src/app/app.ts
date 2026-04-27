import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
// import { Categories } from './components/categories/categories';
// import { Products } from './components/products/products';
// import { ProductsCard } from './components/products-card/products-card';
// import { Login } from './components/login/login';
// import { Signup } from './components/signup/signup';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shop-hub');
}
