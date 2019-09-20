import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  @Input() show: any;

  Math = Math;

  constructor() {
  }

  ngOnInit() {
  }
}
