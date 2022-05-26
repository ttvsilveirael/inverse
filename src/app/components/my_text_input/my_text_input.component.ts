import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-textinput',
  templateUrl: './my_text_input.component.html',
  styleUrls: ['./my_text_input.component.scss']
})
export class MyTextInputComponent {

  _textoDigitado: String = '';

  @Input('value')
  set textoDigitado(newValue){  
    this._textoDigitado = newValue;  
    this.valueChanged.emit(this._textoDigitado);
  }

  get textoDigitado(){
    return this._textoDigitado;
  }


  @Input('type')
  inputType:String = 'text';

  @Input()
  placeholder:String = '';

  @Output()
  valueChanged = new EventEmitter();
  
}