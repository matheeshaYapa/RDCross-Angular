import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ticket-purchase',
  templateUrl: './ticket-purchase.component.html',
  styleUrls: ['./ticket-purchase.component.scss', '../../../../assets/css/stylebuyticket.css']
})
export class TicketPurchaseComponent implements OnInit {

  noOfTickets = 0;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onPurchaseTicketClick() {
    this.router.navigate(['player']);
  }

}
