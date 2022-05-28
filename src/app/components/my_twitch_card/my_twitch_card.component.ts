import { Component, Input } from "@angular/core";
declare var Twitch: any;

@Component({
    selector: 'my-twitch-card',
    templateUrl: './my_twitch_card.component.html',
    styleUrls: ['./my_twitch_card.component.scss']
})
export class MyTwitchCardComponent {    
    @Input()
    canal = 'silveirael';
}