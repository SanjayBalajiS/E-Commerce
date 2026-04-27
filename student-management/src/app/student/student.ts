// import { Component } from '@angular/core';
// import { StudentService } from '../student';
// import { Observable } from 'rxjs';
// import { Student } from '../student.model';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-student',
//   imports:[CommonModule, FormsModule],
//   templateUrl: './student.component.html',
//   styleUrls :['./student.component.html']
// })
// export class StudentComponent {
//   students$: Observable<Student[]>;
//   newStudent: Student = {
//     id: 0,
//     name: '',
//     age: 0,
//     department: ''
//   };

//   isEdit = false;

//   constructor(private service: StudentService) {
//     this.students$ = this.service.students$;
//   }

//   // ADD / UPDATE
//   save() {
//     if (this.isEdit) {
//       this.service.updateStudent(this.newStudent);
//       this.isEdit = false;
//     } else {
//       this.newStudent.id = Date.now();
//       this.service.addStudent(this.newStudent);
//     }

//     this.resetForm();
//   }

//   edit(student: Student) {
//     this.newStudent = { ...student };
//     this.isEdit = true;
//   }

//   delete(id: number) {
//     this.service.deleteStudent(id);
//   }

//   sort(column: keyof Student) {
//     this.service.sort(column);
//   }

//   resetForm() {
//     this.newStudent = { id: 0, name: '', age: 0, department: '' };
//   }
// }