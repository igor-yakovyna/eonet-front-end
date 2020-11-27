import { Component, OnInit } from '@angular/core';
import { NaturalEvent } from '../natural-event';
import { NaturalEventsService } from '../natural-events.service';

@Component({
  selector: 'app-natural-events',
  templateUrl: './natural-events.component.html',
  styleUrls: ['./natural-events.component.css']
})
export class NaturalEventsComponent implements OnInit {

  naturalEvents: NaturalEvent[];
  selectedNaturalEvent: NaturalEvent;

  constructor(private naturalEventsService: NaturalEventsService) { }

  ngOnInit(): void {
    this.getNaturalEvents();
  }

  onSelect(naturalEvent: NaturalEvent): void {
    this.selectedNaturalEvent = naturalEvent;
  }

  getNaturalEvents(): void {
    this.naturalEventsService.getNaturalEvents()
      .subscribe(events => this.naturalEvents = events);
  }
}
