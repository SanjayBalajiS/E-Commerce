import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './student-service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ApiComponent } from './api-component/api-component';
// import { Signal } from '@angular/core';
interface I_QUOTE{
  id: number,
  quote:string,
  author:string
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,ApiComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  // marks:number = 40;
  // mycolor:string = '';
  // constructor(){
  //   if(this.marks >= 35){
  //     this.mycolor = "green";
  //   }
  //   else{
  //     this.mycolor ="red";
  //   }
  // }


// this is for  
  // marks:number= 40;
  // myclass:string = '';
  // constructor(){
  //   if(this.marks >= 35){
  //     this.myclass = "class2";
  //   }
  //   else{
  //   this.myclass = "class3";
  // } 
  // }

  // marks: number = 40;
  // score: boolean= true;
  // constructor(){
  //   if(this.marks >= 35){
  //     this.score = true;
  //   }
  //   else{
  //     this.score = false;
  //   }
  // }
  // students  :any[] = [];
  // constructor(private studentService:StudentService ){
  // }
  
  // studentService = new StudentService();
  // ngOnInit(){
  //    this.students = this.studentService.getStudents();
  // }
  // newId:number = 0;

  quotes!: I_QUOTE[];

  constructor(private httpClient: HttpClient){}

  async getQuotes(){
    const url = 'https://dummyjson.com/quotes';
    const res:any = await firstValueFrom(this.httpClient.get<{ quotes: I_QUOTE[] }>(url));
    console.log(res);
    this.quotes = res.quotes;
  }

  ngOnInit():void{
    this.getQuotes();
  }
}


