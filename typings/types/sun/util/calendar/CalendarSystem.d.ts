import type { TimeZone } from '../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CalendarDate } from '../../../sun/util/calendar/CalendarDate.d.ts'
import type { Era } from '../../../sun/util/calendar/Era.d.ts'
import type { Gregorian } from '../../../sun/util/calendar/Gregorian.d.ts'
export class CalendarSystem extends Object {
    static forName(paramarg0: string): CalendarSystem;
    static getGregorianCalendar(): Gregorian;
    constructor()
    getCalendarDate(): CalendarDate;
    getCalendarDate(arg0: number): CalendarDate;
    getCalendarDate(arg0: number, arg1: TimeZone): CalendarDate;
    getCalendarDate(arg0: number, arg1: CalendarDate): CalendarDate;
    getEra(arg0: string): Era;
    getEras(): Era[];
    getMonthLength(arg0: CalendarDate): number;
    getName(): string;
    getNthDayOfWeek(arg0: number, arg1: number, arg2: CalendarDate): CalendarDate;
    getTime(arg0: CalendarDate): number;
    getYearLength(arg0: CalendarDate): number;
    newCalendarDate(): CalendarDate;
    newCalendarDate(arg0: TimeZone): CalendarDate;
    normalize(arg0: CalendarDate): boolean;
    setTimeOfDay(arg0: CalendarDate, arg1: number): CalendarDate;
    validate(arg0: CalendarDate): boolean;
}