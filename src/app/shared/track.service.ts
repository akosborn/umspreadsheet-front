import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private showList = [];

  tracksSubject: Subject<any[]> = new Subject<any[]>();

  constructor(private http: HttpClient) {
    this.loadTracks().subscribe(
      (response) => this.showList = response.content
    );
  }

  loadTracks(page: number = 0, size: number = 5): Observable<any> {
    const queryParamString = '?page=' + page + '&size=' + size;
    return this.http.get(AppComponent.baseUrl + 'tracks' + queryParamString);
  }

  loadTracksByName(name: string, page: number = 0, size: number = 10): Observable<any> {
    const queryParams: HttpParams = new HttpParams().set('song', name).set('page', page.toString()).set('size', size.toString());
    return this.http.get(AppComponent.baseUrl + 'tracks', { params: queryParams });
  }

  loadAllUniqueTracks(): Observable<any> {
    return this.http.get(AppComponent.baseUrl + 'songs');
  }
}
