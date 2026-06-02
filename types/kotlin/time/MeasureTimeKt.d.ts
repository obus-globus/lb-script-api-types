import type { Object } from '../../java/lang/Object.d.ts'
import type { Function0 } from '../../kotlin/jvm/functions/Function0.d.ts'
import type { TimeSource } from '../../kotlin/time/TimeSource.d.ts'
import type { TimeSource$Monotonic } from '../../kotlin/time/TimeSource$Monotonic.d.ts'
import type { TimedValue } from '../../kotlin/time/TimedValue.d.ts'
export class MeasureTimeKt extends Object {
    static measureTime(paramarg0: Function0<void>): number;
    static measureTime(paramarg0: TimeSource$Monotonic, paramarg1: Function0<void>): number;
    static measureTime(paramarg0: TimeSource, paramarg1: Function0<void>): number;
    static measureTimedValue(paramarg0: Function0<Object>): TimedValue<Object>;
    static measureTimedValue(paramarg0: TimeSource$Monotonic, paramarg1: Function0<Object>): TimedValue<Object>;
    static measureTimedValue(paramarg0: TimeSource, paramarg1: Function0<Object>): TimedValue<Object>;
}