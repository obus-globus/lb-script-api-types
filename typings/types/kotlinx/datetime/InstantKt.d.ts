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
export class InstantKt extends Object {
    static DISTANT_FUTURE_SECONDS: number;
    static DISTANT_PAST_SECONDS: number;
    static daysUntil(self: Instant, other: Instant, timeZone: TimeZone): number;
    static format(self: Instant, format: DateTimeFormat<DateTimeComponents>, offset: UtcOffset): string;
    static minus(self: Instant, value: number, unit: DateTimeUnit$TimeBased): Instant;
    static minus(self: Instant, value: number, unit: DateTimeUnit, timeZone: TimeZone): Instant;
    static minus(self: Instant, period: DateTimePeriod, timeZone: TimeZone): Instant;
    static minus(self: Instant, unit: DateTimeUnit$TimeBased): Instant;
    static minus(self: Instant, unit: DateTimeUnit, timeZone: TimeZone): Instant;
    static minus(self: Instant, other: Instant, timeZone: TimeZone): DateTimePeriod;
    static minus(self: Instant, other: Instant, unit: DateTimeUnit$TimeBased): number;
    static minus(self: Instant, other: Instant, unit: DateTimeUnit, timeZone: TimeZone): number;
    static monthsUntil(self: Instant, other: Instant, timeZone: TimeZone): number;
    static parse(self: Instant$Companion, input: CharSequence, format: DateTimeFormat<DateTimeComponents>): Instant;
    static parseOrNull(self: Instant$Companion, input: CharSequence, format: DateTimeFormat<DateTimeComponents>): Instant | null;
    static periodUntil(self: Instant, other: Instant, timeZone: TimeZone): DateTimePeriod;
    static plus(self: Instant, value: number, unit: DateTimeUnit$TimeBased): Instant;
    static plus(self: Instant, value: number, unit: DateTimeUnit, timeZone: TimeZone): Instant;
    static plus(self: Instant, period: DateTimePeriod, timeZone: TimeZone): Instant;
    static plus(self: Instant, unit: DateTimeUnit$TimeBased): Instant;
    static plus(self: Instant, unit: DateTimeUnit, timeZone: TimeZone): Instant;
    static until(self: Instant, other: Instant, unit: DateTimeUnit$TimeBased): number;
    static until(self: Instant, other: Instant, unit: DateTimeUnit, timeZone: TimeZone): number;
    static yearsUntil(self: Instant, other: Instant, timeZone: TimeZone): number;
}