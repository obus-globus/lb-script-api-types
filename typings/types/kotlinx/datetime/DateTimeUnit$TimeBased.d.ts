import type { Object } from '../../java/lang/Object.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
import type { DateTimeUnit } from '../../kotlinx/datetime/DateTimeUnit.d.ts'
import type { DateTimeUnit$TimeBased$Companion } from '../../kotlinx/datetime/DateTimeUnit$TimeBased$Companion.d.ts'
export class DateTimeUnit$TimeBased extends DateTimeUnit {
    static Companion: DateTimeUnit$TimeBased$Companion;
    constructor(nanoseconds: number)
// (invalid TS: name contains '-')     /*not mapped: */ getDuration-UwyO8pc(): Duration;
    readonly nanoseconds: number;
    // private unitName: string;
    // private unitScale: number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    times(scalar: number): DateTimeUnit$TimeBased;
    toString(): string;
}