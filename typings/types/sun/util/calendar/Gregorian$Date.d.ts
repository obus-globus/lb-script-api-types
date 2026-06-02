import type { TimeZone } from '../../../java/util/TimeZone.d.ts'
import type { BaseCalendar$Date } from '../../../sun/util/calendar/BaseCalendar$Date.d.ts'
export class Gregorian$Date extends BaseCalendar$Date {
    static FIELD_UNDEFINED: number;
    static TIME_UNDEFINED: number;
    constructor()
    constructor(arg0: TimeZone)
    getNormalizedYear(): number;
    setNormalizedYear(arg0: number): void;
}