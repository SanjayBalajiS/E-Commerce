import { Component, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { Child } from './components/child/child';
import { Observe } from './observe/observe';

// import { Student } from './student.model';
// import { StudentComponent } from './student/student';
@Component({
  selector: 'app-root',
  imports: [JsonPipe,RouterOutlet,FormsModule,ReactiveFormsModule, Child, Observe, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('student-management');
// age = new FormControl(null, [Validators.required,Validators.min(18) , Validators.max(100)]);
// submit(){
//   console.log(this.age.value)
// }

product = {
  name : "Laptop",
  price : 5000
}

onSuccess($e:boolean){
  console.log($e);
}


message = "Hello";

changed(){
  this.message = "Changed";
}

userDetails = {
  Uname : "Sanjay",
  Uage :21
}

changeName(){
  this.userDetails.Uname = "Balaji"
}
replaceUser(){
  this.userDetails = {
    Uname:"Kumar",
    Uage: 21
  }
}

}


