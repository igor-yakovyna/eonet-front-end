import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalEventsFilterComponent } from './natural-events-filter.component';

describe('NaturalEventsFilterComponent', () => {
  let component: NaturalEventsFilterComponent;
  let fixture: ComponentFixture<NaturalEventsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturalEventsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalEventsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
