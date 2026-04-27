import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LearnerComponent } from './learner/learner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LearnerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-management');
}
