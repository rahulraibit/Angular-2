import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


// #textInput is ref
// click is the function that pass the value in the component.
// $event is the mouse event that can be passed to the component.
// [(ngModel)] Two way binding. () for event [] input value.
@Component({
  // No style in no style out
  // encapsulation : ViewEncapsulation.Native, 
  // Default setting - get the global style but not style go out
  // encapsulation : ViewEncapsulation.Emulated, 
  // No style will be allowed
  // encapsulation : ViewEncapsulation.None, 
  selector: 'app-simple-form',
  template: `
    <p>
      <input #textInput 
      (mousedown) = "isMousedown = true"
      (mouseup) = "isMousedown = false"
      [ngClass] = "{mousedown : isMousedown}"
      type="text" [(ngModel)] = "message"/>
      <button (click)="getValue($event, textInput.value)">submit</button>
      <button (click)="update.emit({text : message})">update</button>
    </p><br/>
    {{message}}
  `,
  styles: [`:host{ 
    color : red;
  }
  .mousedown {
    border : 2px solid green;
  }
  `]
})
export class SimpleFormComponent implements OnInit {
  @Input() message;
  isMousedown;

  //call back function for higher component.defined your own method.
  @Output() update = new EventEmitter();
  getValue(event, value) {
    console.log(event, value);
  }
  constructor() { }

  ngOnInit() {
  }

}

