import { Component, Input } from "@angular/core";
declare var Twitch: any;

@Component({
    selector: 'twitch-fullscreen',
    templateUrl: './twitch_fullscreen.component.html',
    styleUrls: ['./twitch_fullscreen.component.scss']
})
export class TwitchFullscreenComponent {    
    @Input()
    canal = 'victoradab';
    
    @Input()
    link = 'https://www.twitch.tv/victoradab';
}