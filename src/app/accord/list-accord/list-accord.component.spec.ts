import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccordComponent } from './list-accord.component';

describe('ListAccordComponent', () => {
  let component: ListAccordComponent;
  let fixture: ComponentFixture<ListAccordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAccordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAccordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
