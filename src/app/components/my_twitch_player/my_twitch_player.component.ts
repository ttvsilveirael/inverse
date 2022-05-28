import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
declare var Twitch: any;

@Component({
    selector: 'my-twitch-player',
    templateUrl: './my_twitch_player.component.html',
    styleUrls: ['./my_twitch_player.component.scss']
})
export class MyTwitchPlayerComponent {

    @Input()
    canal = 'silveirael';

    constructor(public sanitizer: DomSanitizer) {
    }

    safeUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://player.twitch.tv/?channel=' + this.canal + '&parent=localhost');
    }
}