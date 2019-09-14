import {Component, Input, OnInit} from '@angular/core';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  @Input() tracks: any[];

  data: {name: string, value: number}[];

  aspectRatio: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Song';
  showYAxisLabel = true;
  yAxisLabel = 'Length';

  constructor() {
  }

  ngOnInit(): void {
    this.data = this.tracks.map(t => ({ name: t.song, value: parseFloat((t.length / 60).toFixed(1)) }));
    console.log(this.data);
  }

  onSelect(event) {
    console.log(event);
  }
}
