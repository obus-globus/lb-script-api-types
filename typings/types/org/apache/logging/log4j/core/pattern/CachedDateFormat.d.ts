import type { StringBuffer } from '../../../../../../java/lang/StringBuffer.d.ts'
import type { DateFormat } from '../../../../../../java/text/DateFormat.d.ts'
import type { FieldPosition } from '../../../../../../java/text/FieldPosition.d.ts'
import type { NumberFormat } from '../../../../../../java/text/NumberFormat.d.ts'
import type { ParsePosition } from '../../../../../../java/text/ParsePosition.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CachedDateFormat extends DateFormat {
    static AM_PM_FIELD: number;
    static DATE_FIELD: number;
    static DAY_OF_WEEK_FIELD: number;
    static DAY_OF_WEEK_IN_MONTH_FIELD: number;
    static DAY_OF_YEAR_FIELD: number;
    static DEFAULT: number;
    static ERA_FIELD: number;
    static FULL: number;
    static HOUR0_FIELD: number;
    static HOUR1_FIELD: number;
    static HOUR_OF_DAY0_FIELD: number;
    static HOUR_OF_DAY1_FIELD: number;
    static LONG: number;
    static MEDIUM: number;
    static MILLISECOND_FIELD: number;
    static MINUTE_FIELD: number;
    static MONTH_FIELD: number;
    static NO_MILLISECONDS: number;
    static SECOND_FIELD: number;
    static SHORT: number;
    static TIMEZONE_FIELD: number;
    static UNRECOGNIZED_MILLISECONDS: number;
    static WEEK_OF_MONTH_FIELD: number;
    static WEEK_OF_YEAR_FIELD: number;
    static YEAR_FIELD: number;
    static findMillisecondStart(paramtime: number, paramformatted: string, paramformatter: DateFormat): number;
    static getAvailableLocales(): Locale[];
    static getDateInstance(): DateFormat;
    static getDateInstance(paramarg0: number): DateFormat;
    static getDateInstance(paramarg0: number, paramarg1: Locale): DateFormat;
    static getDateTimeInstance(): DateFormat;
    static getDateTimeInstance(paramarg0: number, paramarg1: number): DateFormat;
    static getDateTimeInstance(paramarg0: number, paramarg1: number, paramarg2: Locale): DateFormat;
    static getInstance(): DateFormat;
    static getMaximumCacheValidity(parampattern: string): number;
    static getTimeInstance(): DateFormat;
    static getTimeInstance(paramarg0: number): DateFormat;
    static getTimeInstance(paramarg0: number, paramarg1: Locale): DateFormat;
    constructor(dateFormat: DateFormat, expiration: number)
    // private cache: StringBuffer;
    // private expiration: number;
    // private formatter: DateFormat;
    // private millisecondStart: number;
    // private previousTime: number;
    // private slotBegin: number;
    // private tmpDate: Date;
    format(arg0: Date): string;
    format(date: Date, sbuf: StringBuffer, fieldPosition: FieldPosition): StringBuffer;
    format(arg0: Object): string;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(now: number, buf: StringBuffer): StringBuffer;
    getNumberFormat(): NumberFormat;
    parse(arg0: string): Date;
    parse(s: string, pos: ParsePosition): Date;
    setTimeZone(timeZone: TimeZone): void;
}