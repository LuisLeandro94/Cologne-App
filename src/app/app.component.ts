import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemsService],
})
export class AppComponent implements OnInit {
  itemService: ItemsService;

  items = [];

  router: string;

  constructor(itemService: ItemsService, private _router: Router) {
    this.itemService = itemService;
    this.router = _router.url;
  }
  ngOnInit(): void {
    this.items = this.itemService.items;
  }
}
