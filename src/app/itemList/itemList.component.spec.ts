import { ComponentFixture, TestBed } from '@angular/core/testing';

import { itemList } from './itemList.component';

describe('CreateComponent', () => {
  let component: itemList;
  let fixture: ComponentFixture<itemList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [itemList],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(itemList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
