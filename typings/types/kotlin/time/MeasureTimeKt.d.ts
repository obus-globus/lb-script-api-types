import type { Object } from '../../java/lang/Object.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
import type { TimeSource } from '../../kotlin/time/TimeSource.d.ts'
import type { TimeSource$Monotonic } from '../../kotlin/time/TimeSource$Monotonic.d.ts'
import type { TimedValue } from '../../kotlin/time/TimedValue.d.ts'
export class MeasureTimeKt extends Object {
    static measureTime(block: () => void): Duration;
    static measureTime(self: TimeSource$Monotonic, block: () => void): Duration;
    static measureTime(self: TimeSource, block: () => void): Duration;
    static measureTimedValue<T extends unknown>(block: () => T): TimedValue<T>;
    static measureTimedValue<T extends unknown>(self: TimeSource$Monotonic, block: () => T): TimedValue<T>;
    static measureTimedValue<T extends unknown>(self: TimeSource, block: () => T): TimedValue<T>;
}