import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SearchModalComponent} from "../search-modal/search-modal.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../../../assets/css/style.css', '../../../../assets/css/stylemain.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  onSearchIconClick() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

  openSearchModal() {
    this.modalService.open(SearchModalComponent);
  }

}
