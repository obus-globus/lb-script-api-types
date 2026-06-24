import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Instant } from '../../kotlin/time/Instant.d.ts'
import type { Instant$Companion } from '../../kotlin/time/Instant$Companion.d.ts'
import type { DateTimePeriod } from '../../kotlinx/datetime/DateTimePeriod.d.ts'
import type { DateTimeUnit } from '../../kotlinx/datetime/DateTimeUnit.d.ts'
import type { DateTimeUnit$TimeBased } from '../../kotlinx/datetime/DateTimeUnit$TimeBased.d.ts'
import type { TimeZone } from '../../kotlinx/datetime/TimeZone.d.ts'
import type { UtcOffset } from '../../kotlinx/datetime/UtcOffset.d.ts'
import type { DateTimeComponents } from '../../kotlinx/datetime/format/DateTimeComponents.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class InstantKt__InstantKt extends Object {
    static daysUntil(paramarg0: Instant, paramarg1: Instant, paramarg2: TimeZone): number;
    static format(paramarg0: Instant, paramarg1: DateTimeFormat<DateTimeComponents>, paramarg2: UtcOffset): string;
    static minus(paramarg0: Instant, paramarg1: number, paramarg2: DateTimeUnit$TimeBased): Instant;
    static minus(paramarg0: Instant, paramarg1: number, paramarg2: DateTimeUnit, paramarg3: TimeZone): Instant;
    static minus(paramarg0: Instant, paramarg1: DateTimePeriod, paramarg2: TimeZone): Instant;
    static minus(paramarg0: Instant, paramarg1: DateTimeUnit$TimeBased): Instant;
    static minus(paramarg0: Instant, paramarg1: DateTimeUnit, paramarg2: TimeZone): Instant;
    static minus(paramarg0: Instant, paramarg1: number, paramarg2: DateTimeUnit$TimeBased): Instant;
    static minus(paramarg0: Instant, paramarg1: number, paramarg2: DateTimeUnit, paramarg3: TimeZone): Instant;
    static minus(paramarg0: Instant, paramarg1: Instant, paramarg2: TimeZone): DateTimePeriod;
    static minus(paramarg0: Instant, paramarg1: Instant, paramarg2: DateTimeUnit$TimeBased): number;
    static minus(paramarg0: Instant, paramarg1: Instant, paramarg2: DateTimeUnit, paramarg3: TimeZone): number;
    static monthsUntil(paramarg0: Instant, paramarg1: Instant, paramarg2: TimeZone): number;
    static parse(paramarg0: Instant$Companion, paramarg1: CharSequence, paramarg2: DateTimeFormat<DateTimeComponents>): Instant;
    static parseOrNull(paramarg0: Instant$Companion, paramarg1: CharSequence, paramarg2: DateTimeFormat<DateTimeComponents>): Instant;
    static periodUntil(paramarg0: Instant, paramarg1: Instant, paramarg2: TimeZone): DateTimePeriod;
    static plus(paramarg0: Instant, paramarg1: number, paramarg2: DateTimeUnit$TimeBased): Instant;
    static plus(paramarg0: Instant, paramarg1: number, paramarg2: DateTimeUnit, paramarg3: TimeZone): Instant;
    static plus(paramarg0: Instant, paramarg1: DateTimePeriod, paramarg2: TimeZone): Instant;
    static plus(paramarg0: Instant, paramarg1: DateTimeUnit$TimeBased): Instant;
    static plus(paramarg0: Instant, paramarg1: DateTimeUnit, paramarg2: TimeZone): Instant;
    static plus(paramarg0: Instant, paramarg1: number, paramarg2: DateTimeUnit$TimeBased): Instant;
    static plus(paramarg0: Instant, paramarg1: number, paramarg2: DateTimeUnit, paramarg3: TimeZone): Instant;
    static until(paramarg0: Instant, paramarg1: Instant, paramarg2: DateTimeUnit$TimeBased): number;
    static until(paramarg0: Instant, paramarg1: Instant, paramarg2: DateTimeUnit, paramarg3: TimeZone): number;
    static yearsUntil(paramarg0: Instant, paramarg1: Instant, paramarg2: TimeZone): number;
}