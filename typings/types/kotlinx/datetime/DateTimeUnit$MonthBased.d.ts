import type { Object } from '../../java/lang/Object.d.ts'
import type { DateTimeUnit$Companion } from '../../kotlinx/datetime/DateTimeUnit$Companion.d.ts'
import type { DateTimeUnit$DateBased } from '../../kotlinx/datetime/DateTimeUnit$DateBased.d.ts'
import type { DateTimeUnit$DateBased$Companion } from '../../kotlinx/datetime/DateTimeUnit$DateBased$Companion.d.ts'
import type { DateTimeUnit$MonthBased$Companion } from '../../kotlinx/datetime/DateTimeUnit$MonthBased$Companion.d.ts'
export class DateTimeUnit$MonthBased extends DateTimeUnit$DateBased {
    static Companion: DateTimeUnit$Companion;
    static Companion: DateTimeUnit$DateBased$Companion;
    static Companion: DateTimeUnit$MonthBased$Companion;
    constructor(months: number)
    readonly months: number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    times(scalar: number): DateTimeUnit$MonthBased;
    toString(): string;
}