import type { Object } from '../../java/lang/Object.d.ts'
import type { TimeSource$Companion } from '../../kotlin/time/TimeSource$Companion.d.ts'
import type { TimeSource$Monotonic$ValueTimeMark } from '../../kotlin/time/TimeSource$Monotonic$ValueTimeMark.d.ts'
import type { TimeSource$WithComparableMarks } from '../../kotlin/time/TimeSource$WithComparableMarks.d.ts'
export class TimeSource$Monotonic extends Object implements TimeSource$WithComparableMarks {
    static Companion: TimeSource$Companion;
    static INSTANCE: TimeSource$Monotonic;
    markNow(): TimeSource$Monotonic$ValueTimeMark;
    toString(): string;
}