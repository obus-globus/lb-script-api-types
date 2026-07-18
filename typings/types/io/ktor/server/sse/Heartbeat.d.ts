import type { ServerSentEvent } from '../../../../io/ktor/sse/ServerSentEvent.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Duration } from '../../../../kotlin/time/Duration.d.ts'
export class Heartbeat extends Object {
    constructor()
    event: ServerSentEvent;
    eventProvider: (() => ServerSentEvent) | null;
    // private period: Duration;
// (invalid TS: name contains '-')     /*not mapped: */ getPeriod-UwyO8pc(): Duration;
}