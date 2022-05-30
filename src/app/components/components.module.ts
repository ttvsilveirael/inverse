import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MyButtonComponent } from "./my_button/my_button.component";
import { MyImageComponent } from "./my_image/my_image.component";
import { MyTextInputComponent } from "./my_text_input/my_text_input.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { MyTwitchPlayerComponent } from "./my_twitch_player/my_twitch_player.component";
import { MyTwitchChatComponent } from "./my_twitch_chat/my_twitch_chat.component";
import { MyTwitchHistoryComponent } from "./my_twitch_history/my_twitch_history.component";
import { MyTwitchCardComponent } from "./my_twitch_card/my_twitch_card.component";
import { MyToolbarComponent } from "./my_toolbar/my_toolbar.component";
import { MyTwitterCardComponent } from "./my_twitter_card/my_twitter_card.component";
import { MyYoutubePlayerComponent } from "./my_youtube_player/my_youtube_player.component";
import { MyMapComponent } from "./my_map/my_map.component";
import { MyButtonFullscreenComponent } from "./my_button_fullscreen/my_button_fullscreen.component";
import { YoutubeFullscreenComponent } from "./youtube_fullscreen/youtube_fullscreen.component";
import { TwitchFullscreenComponent } from "./twitch_fullscreen/twitch_fullscreen.component";



@NgModule({
    declarations: [
        MyButtonComponent,
        HomeComponent,
        MyImageComponent,
        MyTextInputComponent,
        LoginComponent,
        MyTwitchPlayerComponent,
        MyTwitchChatComponent,
        MyTwitchHistoryComponent,
        MyToolbarComponent,
        MyTwitchCardComponent,
        MyTwitterCardComponent,
        MyYoutubePlayerComponent,
        MyMapComponent,
        MyButtonFullscreenComponent,
        YoutubeFullscreenComponent,
        TwitchFullscreenComponent

    ],
    exports: [
        MyButtonComponent,
        MyImageComponent,
        MyTextInputComponent,
        LoginComponent,
        MyTwitchPlayerComponent,
        MyTwitchChatComponent,
        MyTwitchHistoryComponent,
        MyTwitchCardComponent,
        MyToolbarComponent,
        MyTwitterCardComponent,
        MyYoutubePlayerComponent,
        MyMapComponent,
        MyButtonFullscreenComponent,
        YoutubeFullscreenComponent,
        TwitchFullscreenComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        FormsModule,
        CommonModule, 
        MatGridListModule
    ],
})
export class ComponentsModule { }