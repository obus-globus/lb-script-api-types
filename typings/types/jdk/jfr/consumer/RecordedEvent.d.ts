import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { EventType } from '../../../jdk/jfr/EventType.d.ts'
import type { ValueDescriptor } from '../../../jdk/jfr/ValueDescriptor.d.ts'
import type { RecordedObject } from '../../../jdk/jfr/consumer/RecordedObject.d.ts'
import type { RecordedStackTrace } from '../../../jdk/jfr/consumer/RecordedStackTrace.d.ts'
import type { RecordedThread } from '../../../jdk/jfr/consumer/RecordedThread.d.ts'
import type { ObjectContext } from '../../../jdk/jfr/internal/consumer/ObjectContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RecordedEvent extends RecordedObject {
    constructor(arg0: ObjectContext, arg1: Object[], arg2: number, arg3: number)
    // private endTimeTicks: number;
    // private startTimeTicks: number;
    getDuration(): Duration;
    getEndTime(): Instant;
    // private getEndTimeNanos(): number;
    getEventType(): EventType;
    getFields(): ValueDescriptor[];
    getStackTrace(): RecordedStackTrace;
    getStartTime(): Instant;
    // private getStartTimeNanos(): number;
    getThread(): RecordedThread;
    // private hasDuration(): boolean;
    objectAt(arg0: number): Object;
}