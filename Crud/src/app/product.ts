import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from './iuser';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // api = 'https://dummyjson.com/products';
  // constructor(private http: HttpClient){};

  // getProducts(){
  //   return this.http.get(this.api);
  // }
  // //  this part of service is to add the product

  // addProduct(data:any){
  //   return this.http.post(this.api + '/add' , data);
  // }
  // updataProduct(id:number, data:any){
  //   return this.http.put(`${this.api}/ ${id}`, data);
  // }

  // deleteProduct(id:number){
  //   return this.http.delete(`${this.api}/ ${id}`);
  // }

  api = 'https://fictional-fiesta-6jxvwqvqgr4h4w-3000.app.github.dev/users';
  constructor(private http : HttpClient){}
  getProducts(){
    return this.http.get<Iuser[]>(this.api);
  }

  addProducts(data:any){
    return this.http.post<Iuser[]>(this.api + '/add' ,data);
  }
}
