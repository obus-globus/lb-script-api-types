import type { Object } from '../../java/lang/Object.d.ts'
import type { DateTimeUnit$Companion } from '../../kotlinx/datetime/DateTimeUnit$Companion.d.ts'
import type { DateTimeUnit$DateBased } from '../../kotlinx/datetime/DateTimeUnit$DateBased.d.ts'
import type { DateTimeUnit$DateBased$Companion } from '../../kotlinx/datetime/DateTimeUnit$DateBased$Companion.d.ts'
import type { DateTimeUnit$DayBased$Companion } from '../../kotlinx/datetime/DateTimeUnit$DayBased$Companion.d.ts'
export class DateTimeUnit$DayBased extends DateTimeUnit$DateBased {
    static Companion: DateTimeUnit$Companion;
    static Companion: DateTimeUnit$DateBased$Companion;
    static Companion: DateTimeUnit$DayBased$Companion;
    constructor(days: number)
    readonly days: number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    times(scalar: number): DateTimeUnit$DayBased;
    toString(): string;
}