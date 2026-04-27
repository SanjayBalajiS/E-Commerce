import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductModel } from '../product.model';
import { Iuser } from '../iuser';



@Component({
  selector: 'app-product',
  imports: [FormsModule,CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent implements OnInit{

  // products: ProductModel[] = [];
  // product: ProductModel ={
  //   id:0,
  //   title :'',
  //   price: null as any
  // }; 

  // selected :any = null;

  // constructor(private service : ProductService){}

  // ngOnInit(): void {
  //   this.getAll();
  // }

  // getAll(){
  //   this.service.getProducts().subscribe((res : any)=> {
  //     this.products = res.products ;
  //   });
  // }

  // add(){
  //   this.service.addProduct(this.product).subscribe(() => {
  //     this.getAll();
  //     this.product = {id : 0,title : '', price : 0};
  //   })
  // }

  // delete(id:number){
  //   this.service.deleteProduct(id).subscribe(() => {
  //     this.getAll();
  //   })
  // }

  // edit(prod:any){
  //   this.selected = {...prod};
  // }

  // update(){
  //   const clean = Number(this.selected.id);
  //   this.service.updataProduct(clean,this.selected).subscribe(()=>{
  //     this.getAll();
  //     this.selected = null;
  //   })
  // };

  dataDemo:Iuser[] = [];

  
  constructor(private service : ProductService){}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getProducts().subscribe(res => {
      this.dataDemo= res;
    })
  }


}
