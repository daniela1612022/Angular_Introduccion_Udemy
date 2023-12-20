import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Counter : {{ counter }}</p>
  <button (click)= "decrementBy(counter)" >-1</button>
  <button (click)= "resetBy(counter)" >Reset</button>
  <button (click)= "increaseBy(counter)" >+1</button>
  `
})

export class CounterComponent {
    public counter : number = 16;
    // Metodo para aumentar 1
    increaseBy( value : number):void{
      this.counter += 1;
    }
    // Metodo para disminuir 1
    decrementBy( value : number):void{
      this.counter -= 1;
    }
    // Reset
    resetBy( value : number):void{
      this.counter = 16 ;
    }
}
