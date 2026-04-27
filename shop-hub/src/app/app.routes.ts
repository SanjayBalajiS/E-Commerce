import { Routes } from '@angular/router';
// import { Hero } from './components/hero/hero';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { Home } from './components/home/home';
import { ProductsComp } from './products-comp/products-comp';
// import { ProductsComponent } from './products.component';
export const routes: Routes = [
   { path: '', component: Home },
   {path: 'products', component: ProductsComp},
     { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup }
];
