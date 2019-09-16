import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private showList = [];

  constructor(private http: HttpClient) {
    this.loadTracks().subscribe(
      (response) => this.showList = response.content
    );
  }

  loadTracks(page: number = 0, size: number = 5): Observable<any> {
    const queryParamString = '?page=' + page + '&size=' + size;
    return this.http.get(AppComponent.baseUrl + 'tracks' + queryParamString);
  }
}
