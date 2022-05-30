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
import { TwitchPlayerComponent } from "./my_twitch_player/twitch_player.component";
import { TwitchChatComponent } from "./my_twitch_chat/my_twitch_chat.component";
import { TwitchHistoryComponent } from "./my_twitch_history/my_twitch_history.component";


@NgModule({
    declarations: [
        MyButtonComponent,
        HomeComponent,
        MyImageComponent,
        MyTextInputComponent,
        LoginComponent,
        TwitchPlayerComponent,
        TwitchChatComponent,
        TwitchHistoryComponent,
    
    ],
    exports: [
        MyButtonComponent,
        MyImageComponent,
        MyTextInputComponent,
        LoginComponent,
        TwitchPlayerComponent,
        TwitchChatComponent,
        TwitchHistoryComponent,
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