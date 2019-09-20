import { Component, OnInit } from '@angular/core';
import {ShowService} from '../shared/show.service';
import {TrackService} from '../shared/track.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private showList = [];
  private tracks = [];
  private uniqueTracks: { id: number, name: string, mean: number }[] = [];

  constructor(private showService: ShowService, private trackService: TrackService) { }

  ngOnInit() {
    this.showService.getListSubject().subscribe(
      (response) => this.showList = response.content
    );

    this.showService.loadShows(0, 3).subscribe(
      (response) => {
        this.showList = response.content;
      }
    );

    this.trackService.loadTracks(0, 10).subscribe(resp => {
      this.tracks = resp.content;
      this.trackService.tracksSubject.next(this.tracks);
    });

    this.trackService.loadAllUniqueTracks().subscribe(resp => this.uniqueTracks = resp.content);
  }

  getShowList(): any[] {
    return this.showList;
  }
}
