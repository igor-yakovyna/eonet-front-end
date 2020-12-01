import { EventSource } from './event-source';
import { EventGeometries } from './event-geometries';

export interface NaturalEvent {
    id?: string;
    title?: string;
    description?: string;
    isClosed?: boolean;
    sources?: EventSource[];
    geometries?: EventGeometries[];
}
