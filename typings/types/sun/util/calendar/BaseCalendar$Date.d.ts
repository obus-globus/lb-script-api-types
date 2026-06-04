import type { TimeZone } from '../../../java/util/TimeZone.d.ts'
import type { CalendarDate } from '../../../sun/util/calendar/CalendarDate.d.ts'
export class BaseCalendar$Date extends CalendarDate {
    static FIELD_UNDEFINED: number;
    static TIME_UNDEFINED: number;
    constructor()
    constructor(arg0: TimeZone)
    // private cachedFixedDateJan1: number;
    // private cachedFixedDateNextJan1: number;
    // private cachedYear: number;
    getCachedJan1(): number;
    getCachedYear(): number;
    getNormalizedYear(): number;
    hit(arg0: number): boolean;
    setCache(arg0: number, arg1: number, arg2: number): void;
    setNormalizedDate(arg0: number, arg1: number, arg2: number): BaseCalendar$Date;
    setNormalizedYear(arg0: number): void;
}