import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { EventSource } from '../event-source';
import { NaturalEvent } from '../natural-event';
import { NaturalEventsService } from '../natural-events.service';

@Component({
  selector: 'app-natural-events-filter',
  templateUrl: './natural-events-filter.component.html',
  styleUrls: ['./natural-events-filter.component.css']
})
export class NaturalEventsFilterComponent implements OnInit {

  @Output() filteredNaturalEventsEmit =  new EventEmitter<NaturalEvent[]>();

  eventSources: EventSource[] = [];
  selectedEventSource: EventSource = {};
  selectedEventStatus: string = ' ';
  selectedEventDays: number = 10;

  constructor(private naturalEventsService: NaturalEventsService) { }

  ngOnInit(): void {
    this.getEventSources();
  }

  onEventSourceChange(eventSource: EventSource): void {
    this.getFilteredNaturalEvents();
  }

  onEventStatusChange(eventStatus: string): void {
    this.selectedEventStatus = eventStatus;
    this.getFilteredNaturalEvents();
  }

  onEventDaysChange(eventDays: number): void {
    this.selectedEventDays = eventDays;
    this.getFilteredNaturalEvents();
  }

  getFilteredNaturalEvents(): void {
    this.naturalEventsService.getFilteredNaturalEvents(this.selectedEventSource.id ?? ' ', this.selectedEventStatus, this.selectedEventDays)
      .subscribe(events => this.filteredNaturalEventsEmit.emit(events));
  }

  getEventSources(): void {
    this.naturalEventsService.getNaturalEventsSources()
      .subscribe(sources => this.eventSources = sources);
  }
}
