import { Component } from '@angular/core';
import { ItemsService } from 'src/services/items.service';
import { SizeEnum } from '../enums/size';
import { NotesEnum } from '../enums/notes';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-newItem',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],
})
export class NewItemComponent {
  sizeEnum = SizeEnum;
  notesEnum = NotesEnum;

  faPlus = faPlus;

  itemService: ItemsService;

  note1 = null;
  size1 = null;
  notes = NotesEnum;
  sizes = SizeEnum;
  notesKeys = [];
  sizesKeys = [];

  constructor(itemService: ItemsService) {
    this.notesKeys = Object.keys(this.notes);
    this.sizesKeys = Object.keys(this.sizes).filter((f) => !isNaN(Number(f)));
    this.itemService = itemService;
  }

  change1(value: string) {
    this.note1 = this.notes[value];
  }
  change2(value: string) {
    this.size1 = this.sizes[value];
  }

  onCreateItem(
    itemName: string,
    itemBrand: string,
    itemDescription: string,
    itemImage: string,
    itemSize: SizeEnum,
    itemNotes: NotesEnum,
    itemPrice: string
  ) {
    this.itemService.addItem({
      name: itemName,
      brand: itemBrand,
      description: itemDescription,
      image: itemImage,
      size: itemSize,
      notes: itemNotes,
      price: itemPrice,
      id: this.itemService.items[this.itemService.items.length - 1].id + 1,
    });
  }
}
