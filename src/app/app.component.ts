import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hacker News top Stories';
  feed: Subscription;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getStories()
      .subscribe(
          items => this.feed = items,
          error => console.log('Error fetching stories')
      );
  }
}
