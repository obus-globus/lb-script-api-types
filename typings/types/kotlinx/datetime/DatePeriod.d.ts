import type { DatePeriod$Companion } from '../../kotlinx/datetime/DatePeriod$Companion.d.ts'
import type { DateTimePeriod } from '../../kotlinx/datetime/DateTimePeriod.d.ts'
import type { DateTimePeriod$Companion } from '../../kotlinx/datetime/DateTimePeriod$Companion.d.ts'
export class DatePeriod extends DateTimePeriod {
    static Companion: DatePeriod$Companion;
    static Companion: DateTimePeriod$Companion;
    constructor(years: number, months: number, days: number)
    constructor(totalMonths: number, days: number)
    readonly days: number;
    readonly hours: number;
    readonly minutes: number;
    readonly nanoseconds: number;
    readonly seconds: number;
    // private totalMonths: number;
    /*not mapped: */ getTotalMonths$kotlinx_datetime(): number;
    /*not mapped: */ getTotalNanoseconds$kotlinx_datetime(): number;
}