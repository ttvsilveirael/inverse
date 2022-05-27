import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
declare var Twitch: any;

@Component({
    selector: 'twitch-player',
    templateUrl: './twitch_player.component.html',
    styleUrls: ['./twitch_player.component.scss']
})
export class TwitchPlayerComponent {

    @Input()
    canal = 'silveirael';

    constructor(public sanitizer: DomSanitizer) {
    }

    safeUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://player.twitch.tv/?channel=' + this.canal + '&parent=localhost');
    }
}