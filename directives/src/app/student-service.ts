import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  students = [
    {id:200, name:"Sanjay", age:20},
    {id:202, name:"Balaji", age:20},
    {id:203, name:"San",age:23}
  ];
  getStudents(){
    return this.students;
  }
  //  newName :string ='';
  // newAge : number = 0;


  // addStudent(){
  //   if(this.newAge && this.newName !== null){
  //     const newStudent = {
  //       id: this.students.length + 1,
  //       name: this.newName,
  //       age: this.newAge
  //     }

  //     this.students.push(newStudent);
  //   }
  // }
}
