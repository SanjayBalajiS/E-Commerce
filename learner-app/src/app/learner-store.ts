import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Learner } from './learner.model';


@Injectable({
  providedIn: 'root',
})
export class LearnerStore {

  private learners = new BehaviorSubject<Learner[]>([
    { id: 1, name: 'Sanjay', age: 21, course: 'IT' },
    { id: 2, name: 'Kumar', age: 22, course: 'CSE' },
    { id: 3, name: 'Priya', age: 20, course: 'ECE' }
  ]);
  learners$ = this.learners.asObservable();
  private sortColumn: keyof Learner = 'name';
  private sortDirection: 'asc' | 'desc' = 'asc';
  add(learner: Learner) {
    this.learners.next([...this.learners.value, learner]);
  }

  remove(id: number) {
    this.learners.next(this.learners.value.filter(l => l.id !== id));
  }
  update(updated: Learner) {
    const list = this.learners.value.map(l =>
      l.id === updated.id ? updated : l
    );
    this.learners.next(list);
  }

  sort(column: keyof Learner) {

    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    const sorted = [...this.learners.value].sort((a, b) => {
      let A: any = a[column];
      let B: any = b[column];

      if (typeof A === 'string') A = A.toLowerCase();
      if (typeof B === 'string') B = B.toLowerCase();

      if (A < B) return this.sortDirection === 'asc' ? -1 : 1;
      if (A > B) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    this.learners.next(sorted);
  }
}
