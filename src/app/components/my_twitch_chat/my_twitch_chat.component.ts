import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
declare var Twitch: any;

@Component({
    selector: 'twitch-chat',
    templateUrl: './my_twitch_chat.component.html',
    styleUrls: ['./my_twitch_chat.component.scss']
})
export class TwitchChatComponent {
    constructor(public sanitizer: DomSanitizer) {

    }

    safeUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.twitch.tv/embed/silveirael/chat?parent=localhost');
    }
}
