import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAccordComponent } from './item-accord.component';

describe('ItemAccordComponent', () => {
  let component: ItemAccordComponent;
  let fixture: ComponentFixture<ItemAccordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAccordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAccordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
