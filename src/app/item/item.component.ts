import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemID: number;
  item;
  date;

  constructor(private apiService: ApiService ) {}

  ngOnInit() {
    this.apiService.getItem(this.itemID).subscribe(data => {
      this.item = data;
      const d =  new Date(data.time);
      this.date = d.getUTCDate();
    }, error => console.log('Could not load item' + this.itemID));
  }
}
