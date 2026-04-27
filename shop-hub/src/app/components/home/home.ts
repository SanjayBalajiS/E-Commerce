import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Categories } from '../categories/categories';
import { Products } from '../products/products';

@Component({
  selector: 'app-home',
  imports: [Hero,Categories,Products],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
