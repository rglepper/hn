import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var fetch;

@Injectable()
export class ApiService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0/';
  }

  getStories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/topstories.json`)
                    .map(response => response.json());
  }

  getItem(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/item/${id}.json`)
                  .map(response => response.json());
  }

}

