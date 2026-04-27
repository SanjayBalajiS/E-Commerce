import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
ChangeDetectorRef

@Component({
  selector: 'app-products-comp',
  imports: [CommonModule, FormsModule],
  templateUrl: './products-comp.html',
  styleUrl: './products-comp.css',
})
export class ProductsComp implements OnInit{

  products: any [] = [];
  constructor(private cdr: ChangeDetectorRef,private httpclient : HttpClient){}

ngOnInit(): void {
  console.log('page loaded')
  this.getProducts();
}
  getProducts(){
    this.httpclient.get<any>('https://dummyjson.com/products').subscribe({   
      next: (val) => {
      console.log('API response',val);
        this.products = val.products;
        // this.filteredProducts = val.products
        this.cdr.detectChanges();
        
    },
    error: (err) => {
      console.log(err);
    }
    });;

  }
}
