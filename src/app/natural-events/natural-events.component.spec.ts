import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalEventsComponent } from './natural-events.component';

describe('NaturalEventsComponent', () => {
  let component: NaturalEventsComponent;
  let fixture: ComponentFixture<NaturalEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturalEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
