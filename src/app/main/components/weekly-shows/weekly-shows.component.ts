import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ShowModel} from "../../models/show.model";

@Component({
  selector: 'app-weekly-shows',
  templateUrl: './weekly-shows.component.html',
  styleUrls: ['./weekly-shows.component.scss', '../../../../assets/css/stylemain.css', '../../../../assets/css/style.css']
})
export class WeeklyShowsComponent implements OnInit {

  weeklyShowList = new Array<ShowModel>();

  constructor() { }

  ngOnInit(): void {
    this.weeklyShowList = [
      {
        image: 'assets/images/obanisa.jpg',
        artist: 'BnS',
        title: 'Oba Nisa',
        price: 20,
        scheduledDate: new Date()
      },
      {
        image: 'assets/images/sonu.jpg',
        artist: 'Sonu Nigam',
        title: 'goes Live',
        price: 50,
        scheduledDate: new Date()
      },
      {
        image: 'assets/images/bns.jpg',
        artist: 'BnS',
        title: 'Dell Studio Live',
        price: 13,
        scheduledDate: new Date()
      }
    ];
  }

}
