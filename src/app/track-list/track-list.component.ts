import {Component, Input, OnInit} from '@angular/core';
import {TypeaheadMatch} from 'ngx-bootstrap';
import {TrackService} from '../shared/track.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  @Input() tracks: { id: number, name: string, mean: number }[];
  @Input() uniqueTracks: any[];

  track: string;

  constructor(private trackService: TrackService) { }

  ngOnInit() {
  }

  onSelect($event: TypeaheadMatch) {
    this.trackService.loadTracksByName($event.item.name.toString()).subscribe(resp => {
      this.tracks = resp.content;
      this.trackService.tracksSubject.next(this.tracks);
    });
  }
}
