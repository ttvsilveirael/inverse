import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Guard } from './auth/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { PistaComponent } from './components/pista/pista.component';

const routes: Routes = [
  { path: 'corrida', component: PistaComponent,canActivate:[Guard] },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
