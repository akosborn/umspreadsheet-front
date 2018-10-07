import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  private showList = [];
  private showListSubj: Subject<any[]> = new Subject<any[]>();

  constructor(private http: HttpClient) {
    this.loadShows().subscribe(
      (response) => this.showList = response.content
    );
  }

  loadShows(page: number = 0, size: number = 5): Observable<any> {
    const queryParamString = '?page=' + page + '&size=' + size;
    return this.http.get(AppComponent.baseUrl + 'shows' + queryParamString);
  }

  getListSubject(): Subject<any> {
    return this.showListSubj;
  }
}
