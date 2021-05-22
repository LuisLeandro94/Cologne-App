import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/services/items.service';
import { SizeEnum } from '../enums/size';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { NotesEnum } from '../enums/notes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  faTrashAlt = faTrashAlt;

  itemService: ItemsService;

  sizeEnum = SizeEnum;

  item: {
    name: string;
    brand: string;
    description: string;
    image: string;
    size: SizeEnum;
    notes: NotesEnum;
    price: string;
    id: number;
  };

  constructor(itemService: ItemsService, private activeRoute: ActivatedRoute) {
    this.itemService = itemService;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((p) => {
      const ites: any[] = this.itemService.items;
      let i = ites.filter((x) => x.id == Number(p.id))[0];
      this.item = {
        name: i.name,
        brand: i.brand,
        description: i.description,
        image: i.image,
        size: i.size,
        notes: i.notes,
        price: i.price,
        id: i.id,
      };
    });
  }

  onRemoveItem(itemID: number) {
    this.itemService.removeItem(itemID);
  }
}
