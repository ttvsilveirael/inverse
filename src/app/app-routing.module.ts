import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PistaComponent, TwitchFullscreenComponent } from './components/twitch_fullscreen/twitch_fullscreen.component';
import { Guard } from './auth/auth-guard.service';
import { YoutubeFullscreenComponent } from './components/youtube_fullscreen/youtube_fullscreen.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'youtube', component: YoutubeFullscreenComponent, canActivate: [Guard] }
  { path: 'twitch', component: TwitchFullscreenComponent, canActivate: [Guard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}