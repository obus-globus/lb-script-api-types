import type { Object } from '../../java/lang/Object.d.ts'
import type { TimeSource } from '../../kotlin/time/TimeSource.d.ts'
import type { TimeSource$Monotonic } from '../../kotlin/time/TimeSource$Monotonic.d.ts'
import type { TimedValue } from '../../kotlin/time/TimedValue.d.ts'
export class MeasureTimeKt extends Object {
    static measureTime(paramarg0: () => void): number;
    static measureTime(paramarg0: TimeSource$Monotonic, paramarg1: () => void): number;
    static measureTime(paramarg0: TimeSource, paramarg1: () => void): number;
    static measureTimedValue(paramarg0: () => Object | null): TimedValue<Object>;
    static measureTimedValue(paramarg0: TimeSource$Monotonic, paramarg1: () => Object | null): TimedValue<Object>;
    static measureTimedValue(paramarg0: TimeSource, paramarg1: () => Object | null): TimedValue<Object>;
}