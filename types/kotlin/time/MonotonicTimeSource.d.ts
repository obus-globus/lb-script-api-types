import type { Object } from '../../java/lang/Object.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
import type { TimeSource$Companion } from '../../kotlin/time/TimeSource$Companion.d.ts'
import type { TimeSource$Monotonic$ValueTimeMark } from '../../kotlin/time/TimeSource$Monotonic$ValueTimeMark.d.ts'
import type { TimeSource$WithComparableMarks } from '../../kotlin/time/TimeSource$WithComparableMarks.d.ts'
export class MonotonicTimeSource extends Object implements TimeSource$WithComparableMarks {
    static Companion: TimeSource$Companion;
    static INSTANCE: MonotonicTimeSource;
    // private zero: number;
    adjustReading(timeMark: TimeSource$Monotonic$ValueTimeMark, duration: Duration): TimeSource$Monotonic$ValueTimeMark;
    differenceBetween(one: TimeSource$Monotonic$ValueTimeMark, another: TimeSource$Monotonic$ValueTimeMark): Duration;
    elapsedFrom(timeMark: TimeSource$Monotonic$ValueTimeMark): Duration;
    markNow(): TimeSource$Monotonic$ValueTimeMark;
    // private read(): number;
    toString(): string;
}