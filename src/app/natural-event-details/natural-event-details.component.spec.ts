import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalEventDetailsComponent } from './natural-event-details.component';

describe('NaturalEventDetailsComponent', () => {
  let component: NaturalEventDetailsComponent;
  let fixture: ComponentFixture<NaturalEventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturalEventDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
