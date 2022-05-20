import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PistaComponent } from './components/pista.component';

const routes: Routes = [
  { path: 'corrida', component: PistaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
