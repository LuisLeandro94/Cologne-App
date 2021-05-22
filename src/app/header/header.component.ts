import { Component, OnInit } from '@angular/core';
import { faAirFreshener, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faAirFreshener = faAirFreshener;
  faPlus = faPlus;

  constructor() {}

  ngOnInit(): void {}
}
