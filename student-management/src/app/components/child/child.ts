import { Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnChanges, DoCheck{

  @Input() data:any;

  @Input() data1:any;
  @Output()   success : EventEmitter<boolean> = new EventEmitter();


  onSubmit(){
    console.log('Testing');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data1']){
      console.log('Old', changes['data1'].previousValue);
  
      console.log('New', changes['data1'].currentValue)
    }
    console.log(changes);
  }

   @Input() userDetails:any;
   oldName !: string;


   ngDoCheck(): void {
     if(this.userDetails && this.userDetails.Uname !== this.oldName){
      console.log(this.userDetails.Uname);
      this.oldName = this.userDetails.Uname;
     }
   }



}
