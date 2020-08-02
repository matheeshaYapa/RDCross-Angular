import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { CrosshowComponent } from './main/components/crosshow/crosshow.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { WeeklyShowsComponent } from './main/components/weekly-shows/weekly-shows.component';
import { SingleShowComponent } from './main/components/single-show/single-show.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { BuyTicketComponent } from './buy-ticket/components/buy-ticket/buy-ticket.component';
import { ConcertDescriptionComponent } from './buy-ticket/components/concert-description/concert-description.component';
import { TicketPurchaseComponent } from './buy-ticket/components/ticket-purchase/ticket-purchase.component';
import { VideoPlayComponent } from './player/components/video-play/video-play.component';
import { PlayerDescriptionComponent } from './player/components/player-description/player-description.component';
import { PlayerComponent } from './player/components/player/player.component';
import {FormsModule} from "@angular/forms";
import { SearchModalComponent } from './common/components/search-modal/search-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CrosshowComponent,
    WeeklyShowsComponent,
    SingleShowComponent,
    FooterComponent,
    BuyTicketComponent,
    ConcertDescriptionComponent,
    TicketPurchaseComponent,
    VideoPlayComponent,
    PlayerDescriptionComponent,
    PlayerComponent,
    SearchModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SearchModalComponent]
})
export class AppModule { }
