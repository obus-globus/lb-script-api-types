import type { AbstractCalendar } from '../../../sun/util/calendar/AbstractCalendar.d.ts'
import type { BaseCalendar$Date } from '../../../sun/util/calendar/BaseCalendar$Date.d.ts'
import type { CalendarDate } from '../../../sun/util/calendar/CalendarDate.d.ts'
import type { CalendarSystem } from '../../../sun/util/calendar/CalendarSystem.d.ts'
import type { Gregorian } from '../../../sun/util/calendar/Gregorian.d.ts'
export class BaseCalendar extends AbstractCalendar {
    static APRIL: number;
    static AUGUST: number;
    static DECEMBER: number;
    static FEBRUARY: number;
    static FRIDAY: number;
    static JANUARY: number;
    static JULY: number;
    static JUNE: number;
    static MARCH: number;
    static MAY: number;
    static MONDAY: number;
    static NOVEMBER: number;
    static OCTOBER: number;
    static SATURDAY: number;
    static SEPTEMBER: number;
    static SUNDAY: number;
    static THURSDAY: number;
    static TUESDAY: number;
    static WEDNESDAY: number;
    static forName(paramarg0: string): CalendarSystem;
    static getDayOfWeekDateOnOrBefore(paramarg0: number, paramarg1: number): number;
    static getDayOfWeekFromFixedDate(paramarg0: number): number;
    static getGregorianCalendar(): Gregorian;
    constructor()
    getCalendarDateFromFixedDate(arg0: CalendarDate, arg1: number): void;
    getDayOfWeek(arg0: CalendarDate): number;
    getDayOfYear(arg0: number, arg1: number, arg2: number): number;
    getDayOfYear(arg0: CalendarDate): number;
    getFixedDate(arg0: number, arg1: number, arg2: number, arg3: BaseCalendar$Date): number;
    getFixedDate(arg0: CalendarDate): number;
    getGregorianYearFromFixedDate(arg0: number): number;
    // private getMonthLength(arg0: number, arg1: number): number;
    getMonthLength(arg0: CalendarDate): number;
    getYearFromFixedDate(arg0: number): number;
    getYearLength(arg0: CalendarDate): number;
    isLeapYear(arg0: number): boolean;
    isLeapYear(arg0: CalendarDate): boolean;
    normalize(arg0: CalendarDate): boolean;
    normalizeMonth(arg0: CalendarDate): void;
    validate(arg0: CalendarDate): boolean;
}