import type { Event } from '../../../../../../jdk/jfr/Event.d.ts'
import type { EventType } from '../../../../../../jdk/jfr/EventType.d.ts'
export class ClientFpsEvent extends Event {
    static EVENT_NAME: string;
    static TYPE: EventType;
    constructor(fps: number)
    fps: number;
}