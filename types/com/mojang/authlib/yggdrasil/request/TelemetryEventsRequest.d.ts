import type { TelemetryEventsRequest$Event } from '../../../../../com/mojang/authlib/yggdrasil/request/TelemetryEventsRequest$Event.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TelemetryEventsRequest extends Record {
    constructor(events: TelemetryEventsRequest$Event[])
    // private events: TelemetryEventsRequest$Event[];
    equals(arg0: Object | null): boolean;
    events(): TelemetryEventsRequest$Event[];
    hashCode(): number;
    toString(): string;
}