import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-image',
  templateUrl: './my_image.component.html',
  styleUrls: ['./my_image.component.scss']
})
export class MyImageComponent {

  @Input('assetSrc')
  assetSource = ''

  @Input('src')
  inputSrc = 'images.jpg';

  get source() { return '../assets/images/' + (this.assetSource == '' ? this.inputSrc : this.assetSource); }

  
}
