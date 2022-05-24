import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-textinput',
  templateUrl: './my_text_input.component.html',
  styleUrls: ['./my_text_input.component.scss']
})
export class MyTextInputComponent {
  value: string = '';

  @Input('password')
  ispassword=false;
  
}
