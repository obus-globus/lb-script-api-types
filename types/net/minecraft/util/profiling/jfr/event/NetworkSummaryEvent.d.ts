import type { Event } from '../../../../../../jdk/jfr/Event.d.ts'
import type { EventType } from '../../../../../../jdk/jfr/EventType.d.ts'
export class NetworkSummaryEvent extends Event {
    static EVENT_NAME: string;
    static TYPE: EventType;
    constructor(remoteAddress: string)
    receivedBytes: number;
    receivedPackets: number;
    remoteAddress: string;
    sentBytes: number;
    sentPackets: number;
}