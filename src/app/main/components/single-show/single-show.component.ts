import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ShowModel} from "../../models/show.model";

@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.scss', '../../../../assets/css/stylemain.css', '../../../../assets/css/style.css']
})
export class SingleShowComponent implements OnInit {

  @Input() show: ShowModel;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onBuyTicketClick() {
    this.router.navigate(['buy-ticket']);
  }

}
