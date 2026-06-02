import type { DateTimePeriod } from '../../kotlinx/datetime/DateTimePeriod.d.ts'
import type { DateTimePeriod$Companion } from '../../kotlinx/datetime/DateTimePeriod$Companion.d.ts'
export class DateTimePeriodImpl extends DateTimePeriod {
    static Companion: DateTimePeriod$Companion;
    constructor(totalMonths: number, days: number, totalNanoseconds: number)
    readonly days: number;
    // private totalMonths: number;
    /*not mapped: */ getTotalMonths$kotlinx_datetime(): number;
    // private totalNanoseconds: number;
    /*not mapped: */ getTotalNanoseconds$kotlinx_datetime(): number;
}