import { Component, OnInit } from '@angular/core';
import {ShowService} from '../shared/show.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private showList = [];

  constructor(private showService: ShowService) { }

  ngOnInit() {
    this.showService.getListSubject().subscribe(
      (response) =>
        this.showList = response.content
    );

    this.showService.loadShows().subscribe(
      (response) => {
        this.showList = response.content;
      }
    );
  }

  getShowList(): any[] {
    return this.showList;
  }
}
