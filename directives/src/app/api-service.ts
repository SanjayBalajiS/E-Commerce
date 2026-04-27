import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {


  constructor(private httpClient:HttpClient){}

  
    getUsers(){
      return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    }
}
