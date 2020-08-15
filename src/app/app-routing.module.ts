import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrosshowComponent} from "./main/components/crosshow/crosshow.component";
import {BuyTicketComponent} from "./buy-ticket/components/buy-ticket/buy-ticket.component";
import {PlayerComponent} from "./player/components/player/player.component";
import {LoginComponent} from "./authorization/components/login/login.component";
import {SignUpComponent} from "./authorization/components/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "./authorization/components/forgot-password/forgot-password.component";


const routes: Routes = [
  {
    path: '',
    component: CrosshowComponent
  },
  {
    path: 'buy-ticket',
    component: BuyTicketComponent,
  },
  {
    path: 'player',
    component: PlayerComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
