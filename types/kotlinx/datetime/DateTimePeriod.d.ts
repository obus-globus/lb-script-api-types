import type { Object } from '../../java/lang/Object.d.ts'
import type { DateTimePeriod$Companion } from '../../kotlinx/datetime/DateTimePeriod$Companion.d.ts'
export class DateTimePeriod extends Object {
    static Companion: DateTimePeriod$Companion;
    protected constructor()
    readonly days: number;
    readonly hours: number;
    readonly minutes: number;
    readonly months: number;
    readonly nanoseconds: number;
    readonly seconds: number;
    /*not mapped: */ getTotalMonths$kotlinx_datetime(): number;
    /*not mapped: */ getTotalNanoseconds$kotlinx_datetime(): number;
    readonly years: number;
    // private allNonpositive(): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}