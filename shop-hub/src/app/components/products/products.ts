import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCard } from '../products-card/products-card';
@Component({
  selector: 'app-products',
  imports: [CommonModule,ProductsCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  products = [
  {
    name: 'Smartphone',
    price: 499.99,
    image: 'https://image2url.com/r2/default/images/1773941808470-48625f1c-7c09-4d23-9bfe-61d6b80c6f53.jpg'
  },
  {
    name: 'Running Shoes',
    price: 89.99,
    image: 'https://res.cloudinary.com/djgcgubcs/image/upload/v1773907466/samples/ecommerce/shoes.png'
  },
  {
    name: 'Wireless Headphones',
    price: 129.99,
    image: 'https://image2url.com/r2/default/images/1773942167361-65a63459-8fbe-46e1-b988-42f37c7fe29b.jpg'
  },
    
    {
    name: 'Analog Watch',
    price: 199.99,
    image: 'https://res.cloudinary.com/djgcgubcs/image/upload/v1773907463/samples/ecommerce/analog-classic.jpg'
  },
  {
    name: 'Leather Bag',
    price: 49.99,
    image: 'https://res.cloudinary.com/djgcgubcs/image/upload/v1773907468/samples/ecommerce/leather-bag-gray.jpg'
  }
];
}
