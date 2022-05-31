import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
declare var Twitch: any;

@Component({
    selector: 'my-twitch-card',
    templateUrl: './my_twitch_card.component.html',
    styleUrls: ['./my_twitch_card.component.scss']
})
export class MyTwitchCardComponent {    
    @Input()
    canal = 'victoradab';
    
    @Input()
    link = 'https://www.twitch.tv/victoradab';

    abrirPlayer(){
        this.router.navigate(['/twitch'])
        
        }
        constructor(public router: Router) { }
}