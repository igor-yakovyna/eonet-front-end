import { Component, Input, OnInit } from '@angular/core';
import { NaturalEvent } from '../natural-event';

@Component({
  selector: 'app-natural-event-details',
  templateUrl: './natural-event-details.component.html',
  styleUrls: ['./natural-event-details.component.css']
})
export class NaturalEventDetailsComponent implements OnInit {
  @Input() naturalEvent: NaturalEvent;
  
  constructor() { }

  ngOnInit(): void {
  }

}
