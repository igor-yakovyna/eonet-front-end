import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NaturalEventsComponent } from './natural-events/natural-events.component';
import { NaturalEventDetailsComponent } from './natural-event-details/natural-event-details.component';
import { NaturalEventsFilterComponent } from './natural-events-filter/natural-events-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NaturalEventsComponent,
    NaturalEventDetailsComponent,
    NaturalEventsFilterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
