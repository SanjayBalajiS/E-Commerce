import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observe',
  imports: [],
  templateUrl: './observe.html',
  styleUrl: './observe.css',
})
export class Observe {



  constructor(){
    const test$ = new Observable(subscriber => {
      subscriber.next('2');
      subscriber.next('3');
    });
    test$.subscribe(x => {
      console.log(x);
    })
  }
}
