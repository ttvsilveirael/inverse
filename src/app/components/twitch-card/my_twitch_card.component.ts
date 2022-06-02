import { Component, Input } from "@angular/core";
declare var Twitch: any;

@Component({
    selector: 'twitch-card',
    templateUrl: './my_twitch_card.component.html',
    styleUrls: ['./my_twitch_card.component.scss']
})
export class TwitchCardComponent {    
    @Input()
    canal = 'silveirael';
}