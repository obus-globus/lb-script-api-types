import type { Object } from '../../java/lang/Object.d.ts'
import type { Instant } from '../../kotlin/time/Instant.d.ts'
import type { DateTimePeriod } from '../../kotlinx/datetime/DateTimePeriod.d.ts'
import type { DateTimeUnit } from '../../kotlinx/datetime/DateTimeUnit.d.ts'
import type { DateTimeUnit$TimeBased } from '../../kotlinx/datetime/DateTimeUnit$TimeBased.d.ts'
import type { TimeZone } from '../../kotlinx/datetime/TimeZone.d.ts'
export class InstantJvmKt extends Object {
    static minus(paramarg0: Instant, paramarg1: number, paramarg2: DateTimeUnit, paramarg3: TimeZone): Instant;
    static periodUntil(paramarg0: Instant, paramarg1: Instant, paramarg2: TimeZone): DateTimePeriod;
    static plus(paramarg0: Instant, paramarg1: number, paramarg2: DateTimeUnit, paramarg3: TimeZone): Instant;
    static plus(paramarg0: Instant, paramarg1: DateTimePeriod, paramarg2: TimeZone): Instant;
    static plus(paramarg0: Instant, paramarg1: DateTimeUnit, paramarg2: TimeZone): Instant;
    static plus(paramarg0: Instant, paramarg1: number, paramarg2: DateTimeUnit$TimeBased): Instant;
    static plus(paramarg0: Instant, paramarg1: number, paramarg2: DateTimeUnit, paramarg3: TimeZone): Instant;
    static until(paramarg0: Instant, paramarg1: Instant, paramarg2: DateTimeUnit, paramarg3: TimeZone): number;
}