import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { EventType } from '../../../../jdk/jfr/EventType.d.ts'
import type { ValueDescriptor } from '../../../../jdk/jfr/ValueDescriptor.d.ts'
import type { TimeConverter } from '../../../../jdk/jfr/internal/consumer/TimeConverter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ObjectContext extends Object {
    constructor(arg0: EventType, arg1: ValueDescriptor[], arg2: TimeConverter)
    // private contextLookup: JavaMap<ValueDescriptor, ObjectContext>;
    eventType: EventType;
    fields: ValueDescriptor[];
    // private timeConverter: TimeConverter;
    buildContextLookup(arg0: ValueDescriptor[]): JavaMap<ValueDescriptor, ObjectContext>;
    convertTimespan(arg0: number): number;
    convertTimestamp(arg0: number): number;
    getInstance(arg0: ValueDescriptor): ObjectContext;
    getZoneOffset(): ZoneId;
}