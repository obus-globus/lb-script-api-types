import type { DateFormat } from '../../../../../java/text/DateFormat.d.ts'
import type { SimpleDateFormat } from '../../../../../java/text/SimpleDateFormat.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
export class HttpHeaderDateFormat$HttpHeaderDateFormatObsolete2 extends SimpleDateFormat {
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
    static getAvailableLocales(): Locale[];
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
}