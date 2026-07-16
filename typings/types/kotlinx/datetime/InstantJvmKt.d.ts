import type { Object } from '../../java/lang/Object.d.ts'
import type { Instant } from '../../kotlin/time/Instant.d.ts'
import type { DateTimePeriod } from '../../kotlinx/datetime/DateTimePeriod.d.ts'
import type { DateTimeUnit } from '../../kotlinx/datetime/DateTimeUnit.d.ts'
import type { DateTimeUnit$TimeBased } from '../../kotlinx/datetime/DateTimeUnit$TimeBased.d.ts'
import type { TimeZone } from '../../kotlinx/datetime/TimeZone.d.ts'
export class InstantJvmKt extends Object {
    static minus(instant: Instant, value: number, unit: DateTimeUnit, timeZone: TimeZone): Instant;
    static periodUntil(start: Instant, end: Instant, timeZone: TimeZone): DateTimePeriod;
    static plus(instant: Instant, value: number, unit: DateTimeUnit, timeZone: TimeZone): Instant;
    static plus(instant: Instant, period: DateTimePeriod, timeZone: TimeZone): Instant;
    static plus(instant: Instant, unit: DateTimeUnit, timeZone: TimeZone): Instant;
    static plus(instant: Instant, value: number, unit: DateTimeUnit$TimeBased): Instant;
    static until(start: Instant, end: Instant, unit: DateTimeUnit, timeZone: TimeZone): number;
}