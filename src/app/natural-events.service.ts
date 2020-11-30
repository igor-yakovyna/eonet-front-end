import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NaturalEvent } from './natural-event';

@Injectable({
  providedIn: 'root'
})
export class NaturalEventsService {

  private naturalEventsHost = 'https://localhost:44379/';
  private naturalEventsUrl = 'api/naturalEvents';

  constructor(private http: HttpClient) { }

  getNaturalEvents(): Observable<NaturalEvent[]> {
    return this.http
    .get<NaturalEvent[]>(`${this.naturalEventsHost}${this.naturalEventsUrl}`)
    .pipe(catchError(this.handleError<NaturalEvent[]>('getNaturalEvents', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
