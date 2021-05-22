import { Component, Input } from '@angular/core';
import { NotesEnum } from '../enums/notes';
import { SizeEnum } from '../enums/size';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item: {
    name: string;
    brand: string;
    description: string;
    image: string;
    size: SizeEnum;
    notes: NotesEnum;
    price: string;
    id: number;
  };
}
