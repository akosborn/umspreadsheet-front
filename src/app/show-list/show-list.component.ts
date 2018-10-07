import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  showList;
  size = 3;
  page = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getRecentShows().subscribe(
      (response) => this.showList = response.content
    );
  }

  getRecentShows(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/shows?page=' + this.page + '&size=' + this.size);
  }

  getMoreShows() {
    this.page++;
    return this.getRecentShows().subscribe(
      (response) => {
        this.showList.push(...response.content);
        console.log(this.showList);
      }
    );
  }
}
