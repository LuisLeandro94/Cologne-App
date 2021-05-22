import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/services/items.service';

@Component({
  selector: 'app-itemList',
  templateUrl: './itemList.component.html',
  styleUrls: ['./itemList.component.css'],
})
export class itemList implements OnInit {
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
