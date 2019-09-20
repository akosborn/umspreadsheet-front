import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  data: any[];
  barColors = [];

  @Input()
  set tracks(tracks: any[]) {
    this.data = tracks.map(t => {
      const name = `${t.song.name} ${t.show.date} ${t.set.name}.${t.setPosition}`;
      const deviationPct = (((t.length - t.song.mean) / t.song.mean) * 100);

      this.barColors.push({ name: name, value: deviationPct >= 0 ? '#4682B4' : '#808080' });
      return {
        name: name,
        value: t.length > 0 ? deviationPct.toFixed(0) : 0
      };
    });
  }

  aspectRatio: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Song';
  showYAxisLabel = true;
  yAxisLabel = 'Length Deviation (%)';

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(event) {
  }
}
