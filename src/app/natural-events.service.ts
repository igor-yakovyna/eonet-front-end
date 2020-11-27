import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NaturalEvent } from './natural-event';
import { NATURAL_EVENTS } from './mock-events';

@Injectable({
  providedIn: 'root'
})
export class NaturalEventsService {

  constructor() { }

  getNaturalEvents(): Observable<NaturalEvent[]> {
    return of(NATURAL_EVENTS);
  }
}
