import type { TimeZone } from '../../../java/util/TimeZone.d.ts'
import type { BaseCalendar } from '../../../sun/util/calendar/BaseCalendar.d.ts'
import type { CalendarDate } from '../../../sun/util/calendar/CalendarDate.d.ts'
import type { CalendarSystem } from '../../../sun/util/calendar/CalendarSystem.d.ts'
import type { Gregorian$Date } from '../../../sun/util/calendar/Gregorian$Date.d.ts'
export class Gregorian extends BaseCalendar {
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
    getCalendarDate(): Gregorian$Date;
    getCalendarDate(arg0: number): Gregorian$Date;
    getCalendarDate(arg0: number, arg1: TimeZone): Gregorian$Date;
    getCalendarDate(arg0: number, arg1: CalendarDate): Gregorian$Date;
    getName(): string;
    newCalendarDate(): Gregorian$Date;
    newCalendarDate(arg0: TimeZone): Gregorian$Date;
}