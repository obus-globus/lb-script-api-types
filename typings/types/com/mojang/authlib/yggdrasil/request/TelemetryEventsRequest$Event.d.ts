import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TelemetryEventsRequest$Event extends Record {
    // private data: JsonObject;
    // private name: string;
    // private source: string;
    // private timestamp: number;
    data(): JsonObject;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    source(): string;
    timestamp(): number;
    toString(): string;
}