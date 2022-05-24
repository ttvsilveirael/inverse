import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PistaComponent } from './components/pista/pista.component';
import { Guard } from './auth/auth-guard.service';

const routes: Routes = [
  { path: 'corrida', component: PistaComponent, canActivate: [Guard] },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
