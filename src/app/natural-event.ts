import { EventSource } from './event-source';
import { EventCoordinates } from './event-coordinates';

export interface NaturalEvent {
    id?: string;
    title?: string;
    description?: string;
    isClosed?: boolean;
    sources?: EventSource[];
    coordinates?: EventCoordinates[];
}
