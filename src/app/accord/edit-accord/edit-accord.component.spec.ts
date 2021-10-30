import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccordComponent } from './edit-accord.component';

describe('EditAccordComponent', () => {
  let component: EditAccordComponent;
  let fixture: ComponentFixture<EditAccordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAccordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
