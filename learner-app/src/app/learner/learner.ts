import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Learner } from '../learner.model';
import { LearnerStore } from '../learner-store';

@Component({
  selector: 'app-learner',
  imports: [CommonModule,FormsModule],
  templateUrl: './learner.html',
  styleUrl: './learner.css',
})
export class LearnerComponent {
  learners$: Observable<Learner[]>;
  form: Learner = {
    id: 0,
    name: '',
    age: 0,
    course: ''
  };
  searchText: string = '';
  isEdit = false;

  constructor(private store: LearnerStore) {
    this.learners$ = this.store.learners$;
  }

  save() {
    if (this.isEdit) {
      this.store.update(this.form);
      this.isEdit = false;
    } else {
      this.form.id = Date.now();
      this.store.add(this.form);
    }
    this.reset();
  }

  edit(l: Learner) {
    this.form = { ...l };
    this.isEdit = true;
  }

  delete(id: number) {
    this.store.remove(id);
  }

  sort(column: keyof Learner) {
    this.store.sort(column);
  }

  reset() {
    this.form = { id: 0, name: '', age: 0, course: '' };
  }

}
