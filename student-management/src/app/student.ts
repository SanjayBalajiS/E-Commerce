import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from './student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {

  private students = new BehaviorSubject<Student[]>([
    { id: 1, name: 'Sanjay', age: 21, department: 'IT' },
    { id: 2, name: 'Arun', age: 22, department: 'CSE' },
    { id: 3, name: 'Divya', age: 20, department: 'ECE' }
  ]);

  students$ = this.students.asObservable();

  private sortColumn: string = '';
  private sortDirection: 'asc' | 'desc' = 'asc';

  // ➕ ADD
  addStudent(student: Student) {
    this.students.next([...this.students.value, student]);
  }

  // ❌ DELETE
  deleteStudent(id: number) {
    this.students.next(this.students.value.filter(s => s.id !== id));
  }

  // ✏ UPDATE
  updateStudent(updated: Student) {
    const updatedList = this.students.value.map(s =>
      s.id === updated.id ? updated : s
    );
    this.students.next(updatedList);
  }

  // 🔄 SORT (Double Click Logic)
  sort(column: keyof Student) {

    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    const sorted = [...this.students.value].sort((a, b) => {
      let A = a[column];
      let B = b[column];

      if (typeof A === 'string') A = A.toLowerCase();
      if (typeof B === 'string') B = B.toLowerCase();

      if (A < B) return this.sortDirection === 'asc' ? -1 : 1;
      if (A > B) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    this.students.next(sorted);
  }
}