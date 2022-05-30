import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-youtube-player',
  templateUrl: './my_youtube_player.component.html',
  styleUrls: ['./my_youtube_player.component.scss']
})
export class MyYoutubePlayerComponent {

  abrirPlayer(){
  this.router.navigate(['/youtube'])
  
  }
  constructor(public router: Router) { }

}