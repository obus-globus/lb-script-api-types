import type { TimeZone } from '../../../java/util/TimeZone.d.ts'
import type { CalendarDate } from '../../../sun/util/calendar/CalendarDate.d.ts'
import type { CalendarSystem } from '../../../sun/util/calendar/CalendarSystem.d.ts'
import type { Era } from '../../../sun/util/calendar/Era.d.ts'
import type { Gregorian } from '../../../sun/util/calendar/Gregorian.d.ts'
export class AbstractCalendar extends CalendarSystem {
    static forName(paramarg0: string): CalendarSystem;
    static getDayOfWeekDateOnOrBefore(paramarg0: number, paramarg1: number): number;
    static getGregorianCalendar(): Gregorian;
    constructor()
    readonly eras: Era[];
    getCalendarDate(): CalendarDate;
    getCalendarDate(arg0: number): CalendarDate;
    getCalendarDate(arg0: number, arg1: TimeZone): CalendarDate;
    getCalendarDate(arg0: number, arg1: CalendarDate): CalendarDate;
    getCalendarDateFromFixedDate(arg0: CalendarDate, arg1: number): void;
    getEra(arg0: string): Era;
    getEras(): Era[];
    getFixedDate(arg0: CalendarDate): number;
    getNthDayOfWeek(arg0: number, arg1: number, arg2: CalendarDate): CalendarDate;
    getTime(arg0: CalendarDate): number;
    getTimeOfDay(arg0: CalendarDate): number;
    getTimeOfDayValue(arg0: CalendarDate): number;
    isLeapYear(arg0: CalendarDate): boolean;
    normalizeTime(arg0: CalendarDate): number;
    setEras(arg0: Era[]): void;
    setTimeOfDay(arg0: CalendarDate, arg1: number): CalendarDate;
    validateTime(arg0: CalendarDate): boolean;
}