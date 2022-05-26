import { Component, Input, OnInit } from "@angular/core";
declare var Twitch: any;

@Component({
    selector: 'twitch-player',
    templateUrl: './twitch_player.component.html',
    styleUrls: ['./twitch_player.component.scss']
})
export class TwitchPlayerComponent implements OnInit {
    player: any;
    newStream = '';
    lastStream = '';
    history = [''];

    @Input()
    canal = 'silveirael';
    setNewStream(event: string) {
        if (event != this.newStream && event != this.canal) {
            this.newStream = event;
        }
    }

    ngOnInit(): void {
        this.player = new Twitch.Player("twitch-embed", {
            channel: this.canal
        });
        this.player.setVolume(0);
        this.history.push('twitch.tv/'+this.canal);
    }

    abrirStream(stream?:any) {
        if(stream != null){
            this.newStream = stream;
        }
        let data = this.newStream.split('/');
        this.lastStream = this.canal;
        this.canal = data[data.length-1];
        this.newStream = '';
        this.player.setChannel(this.canal);    
        this.history.push('twitch.tv/'+this.canal);    
    }

    voltar(){
        if(this.lastStream == ''){
            return;
        }
        let actual = this.canal;
        this.canal = this.lastStream;
        this.lastStream = actual;
        this.player.setChannel(this.canal);
        this.history.push('twitch.tv/'+this.canal);
    }
}