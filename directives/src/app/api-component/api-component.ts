import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-api-component',
  imports: [JsonPipe],
  templateUrl: './api-component.html',
  styleUrl: './api-component.css',
})
export class ApiComponent implements OnInit {


  Users:any;

  constructor(private api:ApiService){};

  ngOnInit(): void {
    this.api.getUsers().subscribe(data =>  {
      this.Users = data;
      console.log(data);
    })
  }
}
