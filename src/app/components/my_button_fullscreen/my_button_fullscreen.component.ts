import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-button-fullscreen',
    templateUrl: './my_button_fullscreen.component.html',
    styleUrls: ['./my_button_fullscreen.component.scss']
})
export class MyButtonFullscreenComponent {

    @Input('assetSrc')
    assetSource = ''
  
    @Input('src')
    inputSrc = 'expandir.png';
  
    get source() { return '../assets/images/' + (this.assetSource == '' ? this.inputSrc : this.assetSource); }
}