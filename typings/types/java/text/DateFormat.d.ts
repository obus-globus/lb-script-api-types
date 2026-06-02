import type { StringBuffer } from '../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../java/text/FieldPosition.d.ts'
import type { Format } from '../../java/text/Format.d.ts'
import type { Format$StringBuf } from '../../java/text/Format$StringBuf.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { ParsePosition } from '../../java/text/ParsePosition.d.ts'
import type { Calendar } from '../../java/util/Calendar.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { TimeZone } from '../../java/util/TimeZone.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class DateFormat extends Format {
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
    static SECOND_FIELD: number;
    static SHORT: number;
    static TIMEZONE_FIELD: number;
    static WEEK_OF_MONTH_FIELD: number;
    static WEEK_OF_YEAR_FIELD: number;
    static YEAR_FIELD: number;
    static getAvailableLocales(): (Object | null)[];
    static getDateInstance(): DateFormat;
    static getDateInstance(paramarg0: number): DateFormat;
    static getDateInstance(paramarg0: number, paramarg1: Locale): DateFormat;
    static getDateTimeInstance(): DateFormat;
    static getDateTimeInstance(paramarg0: number, paramarg1: number): DateFormat;
    static getDateTimeInstance(paramarg0: number, paramarg1: number, paramarg2: Locale): DateFormat;
    static getInstance(): DateFormat;
    static getTimeInstance(): DateFormat;
    static getTimeInstance(paramarg0: number): DateFormat;
    static getTimeInstance(paramarg0: number, paramarg1: Locale): DateFormat;
    constructor()
    calendar: Calendar;
    numberFormat: NumberFormat;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    format(arg0: Date): string;
    format(arg0: Date, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Date, arg1: Format$StringBuf, arg2: FieldPosition): Format$StringBuf;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Object, arg1: Format$StringBuf, arg2: FieldPosition): Format$StringBuf;
    getCalendar(): Calendar;
    getNumberFormat(): NumberFormat;
    getTimeZone(): TimeZone;
    hashCode(): number;
    isLenient(): boolean;
    parse(arg0: string): Date;
    parse(arg0: string, arg1: ParsePosition): Date;
    parseObject(arg0: string, arg1: ParsePosition): Object;
    setCalendar(arg0: Calendar): void;
    setLenient(arg0: boolean): void;
    setNumberFormat(arg0: NumberFormat): void;
    setTimeZone(arg0: TimeZone): void;
}