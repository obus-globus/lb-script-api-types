import type { LocalDateTime } from '../../../../../java/time/LocalDateTime.d.ts'
import type { OffsetDateTime } from '../../../../../java/time/OffsetDateTime.d.ts'
import type { ZonedDateTime } from '../../../../../java/time/ZonedDateTime.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class DateUtils extends Object {
    static MILLIS_PER_DAY: number;
    static MILLIS_PER_HOUR: number;
    static MILLIS_PER_MINUTE: number;
    static MILLIS_PER_SECOND: number;
    static RANGE_MONTH_MONDAY: number;
    static RANGE_MONTH_SUNDAY: number;
    static RANGE_WEEK_CENTER: number;
    static RANGE_WEEK_MONDAY: number;
    static RANGE_WEEK_RELATIVE: number;
    static RANGE_WEEK_SUNDAY: number;
    static SEMI_MONTH: number;
    static addDays(paramarg0: Date, paramarg1: number): Date;
    static addHours(paramarg0: Date, paramarg1: number): Date;
    static addMilliseconds(paramarg0: Date, paramarg1: number): Date;
    static addMinutes(paramarg0: Date, paramarg1: number): Date;
    static addMonths(paramarg0: Date, paramarg1: number): Date;
    static addSeconds(paramarg0: Date, paramarg1: number): Date;
    static addWeeks(paramarg0: Date, paramarg1: number): Date;
    static addYears(paramarg0: Date, paramarg1: number): Date;
    static ceiling(paramarg0: Calendar, paramarg1: number): Calendar;
    static ceiling(paramarg0: Object, paramarg1: number): Date;
    static ceiling(paramarg0: Date, paramarg1: number): Date;
    static getFragmentInDays(paramarg0: Calendar, paramarg1: number): number;
    static getFragmentInDays(paramarg0: Date, paramarg1: number): number;
    static getFragmentInHours(paramarg0: Calendar, paramarg1: number): number;
    static getFragmentInHours(paramarg0: Date, paramarg1: number): number;
    static getFragmentInMilliseconds(paramarg0: Calendar, paramarg1: number): number;
    static getFragmentInMilliseconds(paramarg0: Date, paramarg1: number): number;
    static getFragmentInMinutes(paramarg0: Calendar, paramarg1: number): number;
    static getFragmentInMinutes(paramarg0: Date, paramarg1: number): number;
    static getFragmentInSeconds(paramarg0: Calendar, paramarg1: number): number;
    static getFragmentInSeconds(paramarg0: Date, paramarg1: number): number;
    static isSameDay(paramarg0: Calendar, paramarg1: Calendar): boolean;
    static isSameDay(paramarg0: Date, paramarg1: Date): boolean;
    static isSameInstant(paramarg0: Calendar, paramarg1: Calendar): boolean;
    static isSameInstant(paramarg0: Date, paramarg1: Date): boolean;
    static isSameLocalTime(paramarg0: Calendar, paramarg1: Calendar): boolean;
    static iterator(paramarg0: Object, paramarg1: number): Iterator<Object>;
    static iterator(paramarg0: Calendar, paramarg1: number): Iterator<Calendar>;
    static iterator(paramarg0: Date, paramarg1: number): Iterator<Calendar>;
    static parseDate(paramarg0: string, paramarg1: (Object | null)[]): Date;
    static parseDate(paramarg0: string, paramarg1: Locale, paramarg2: (Object | null)[]): Date;
    static parseDateStrictly(paramarg0: string, paramarg1: (Object | null)[]): Date;
    static parseDateStrictly(paramarg0: string, paramarg1: Locale, paramarg2: (Object | null)[]): Date;
    static round(paramarg0: Calendar, paramarg1: number): Calendar;
    static round(paramarg0: Object, paramarg1: number): Date;
    static round(paramarg0: Date, paramarg1: number): Date;
    static setDays(paramarg0: Date, paramarg1: number): Date;
    static setHours(paramarg0: Date, paramarg1: number): Date;
    static setMilliseconds(paramarg0: Date, paramarg1: number): Date;
    static setMinutes(paramarg0: Date, paramarg1: number): Date;
    static setMonths(paramarg0: Date, paramarg1: number): Date;
    static setSeconds(paramarg0: Date, paramarg1: number): Date;
    static setYears(paramarg0: Date, paramarg1: number): Date;
    static toCalendar(paramarg0: Date): Calendar;
    static toCalendar(paramarg0: Date, paramarg1: TimeZone): Calendar;
    static toLocalDateTime(paramarg0: Date): LocalDateTime;
    static toLocalDateTime(paramarg0: Date, paramarg1: TimeZone): LocalDateTime;
    static toOffsetDateTime(paramarg0: Date): OffsetDateTime;
    static toOffsetDateTime(paramarg0: Date, paramarg1: TimeZone): OffsetDateTime;
    static toZonedDateTime(paramarg0: Date): ZonedDateTime;
    static toZonedDateTime(paramarg0: Date, paramarg1: TimeZone): ZonedDateTime;
    static truncate(paramarg0: Calendar, paramarg1: number): Calendar;
    static truncate(paramarg0: Object, paramarg1: number): Date;
    static truncate(paramarg0: Date, paramarg1: number): Date;
    static truncatedCompareTo(paramarg0: Calendar, paramarg1: Calendar, paramarg2: number): number;
    static truncatedCompareTo(paramarg0: Date, paramarg1: Date, paramarg2: number): number;
    static truncatedEquals(paramarg0: Calendar, paramarg1: Calendar, paramarg2: number): boolean;
    static truncatedEquals(paramarg0: Date, paramarg1: Date, paramarg2: number): boolean;
    constructor()
}