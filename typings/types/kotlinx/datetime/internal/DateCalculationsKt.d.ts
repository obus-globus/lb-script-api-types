import type { Object } from '../../../java/lang/Object.d.ts'
export class DateCalculationsKt extends Object {
    static HOURS_PER_DAY: number;
    static MILLIS_PER_DAY: number;
    static MILLIS_PER_ONE: number;
    static MINUTES_PER_HOUR: number;
    static NANOS_PER_DAY: number;
    static NANOS_PER_HOUR: number;
    static NANOS_PER_MILLI: number;
    static NANOS_PER_MINUTE: number;
    static NANOS_PER_ONE: number;
    static SECONDS_PER_10000_YEARS: number;
    static SECONDS_PER_DAY: number;
    static SECONDS_PER_HOUR: number;
    static SECONDS_PER_MINUTE: number;
    static isLeapYear(year: number): boolean;
    static monthLength(self: number, isLeapYear: boolean): number;
}