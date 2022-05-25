import { Component, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'my-textinput',
  templateUrl: './my_text_input.component.html',
  styleUrls: ['./my_text_input.component.scss']
})
export class MyTextInputComponent {
  _value: string = '';
  set value (newValue){
    this.value= newValue;
    this.valueCharged.emit(this._value);
  }

  get value(){
    return this._value;
  }
 @Input()
  type:string ='text';
@Input('type')
inputType:string ='text';


@Input()
valueCharged = new EventEmitter();
  
}
