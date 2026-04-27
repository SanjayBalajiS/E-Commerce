import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-products-card',
  imports: [],
  templateUrl: './products-card.html',
  styleUrl: './products-card.css',
})
export class ProductsCard {
  @Input() product : any;

  addToCart(){
    alert(this.product.name+' added to cart');
  }
}
