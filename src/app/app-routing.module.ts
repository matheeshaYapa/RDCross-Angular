import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrosshowComponent} from "./main/components/crosshow/crosshow.component";
import {BuyTicketComponent} from "./buy-ticket/components/buy-ticket/buy-ticket.component";
import {PlayerComponent} from "./player/components/player/player.component";


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
