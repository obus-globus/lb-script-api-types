import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { EventType } from '../../../../jdk/jfr/EventType.d.ts'
import type { ValueDescriptor } from '../../../../jdk/jfr/ValueDescriptor.d.ts'
import type { TimeConverter } from '../../../../jdk/jfr/internal/consumer/TimeConverter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ObjectContext extends Object {
    constructor(arg0: EventType, arg1: ValueDescriptor[], arg2: TimeConverter)
    private constructor(arg0: Map<ValueDescriptor, ObjectContext>, arg1: EventType, arg2: ValueDescriptor[], arg3: TimeConverter)
    // private contextLookup: Map<ValueDescriptor, ObjectContext>;
    eventType: EventType;
    fields: ValueDescriptor[];
    // private timeConverter: TimeConverter;
    buildContextLookup(arg0: ValueDescriptor[]): Map<ValueDescriptor, ObjectContext>;
    convertTimespan(arg0: number): number;
    convertTimestamp(arg0: number): number;
    getInstance(arg0: ValueDescriptor): ObjectContext;
    getZoneOffset(): ZoneId;
}