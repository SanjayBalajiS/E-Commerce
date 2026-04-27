import { Component } from '@angular/core';
import { ChildService } from '../child-service';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  constructor(private childService: ChildService){
    this.childService.sub.subscribe(x => {
      console.log(x);
    })
  }
  send(){
    this.childService.sendData(200);
  }
}
