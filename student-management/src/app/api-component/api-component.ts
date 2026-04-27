import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service';

@Component({
  selector: 'app-api-component',
  imports: [],
  templateUrl: './api-component.html',
  styleUrl: './api-component.css',
})
export class ApiComponent implements OnInit {
  User : any;
  constructor(private apiService : ApiService){}
  ngOnInit(): void {
    this.apiService.getUser().subscribe(data => {
      this.User = data
      console.log(data);
    });
  }
}
