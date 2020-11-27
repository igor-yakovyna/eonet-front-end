import { TestBed } from '@angular/core/testing';

import { NaturalEventsService } from './natural-events.service';

describe('NaturalEventsService', () => {
  let service: NaturalEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaturalEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
