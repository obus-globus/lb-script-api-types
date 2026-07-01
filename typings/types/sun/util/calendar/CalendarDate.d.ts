import type { TimeZone } from '../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
import type { Era } from '../../../sun/util/calendar/Era.d.ts'
export class CalendarDate extends Object implements Cloneable {
    static FIELD_UNDEFINED: number;
    static TIME_UNDEFINED: number;
    constructor()
    constructor(arg0: TimeZone)
    readonly dayOfMonth: number;
    readonly dayOfWeek: number;
    readonly daylightSaving: number;
    readonly era: Era;
    // private fraction: number;
    readonly hours: number;
    readonly leapYear: boolean;
    readonly millis: number;
    readonly minutes: number;
    readonly month: number;
    readonly normalized: boolean;
    readonly seconds: number;
    readonly year: number;
    readonly zoneOffset: number;
    // private zoneinfo: TimeZone;
    addHours(arg0: number): CalendarDate;
    addMonth(arg0: number): CalendarDate;
    addYear(arg0: number): CalendarDate;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    getDayOfMonth(): number;
    getDayOfWeek(): number;
    getDaylightSaving(): number;
    getEra(): Era;
    getHours(): number;
    getMillis(): number;
    getMinutes(): number;
    getMonth(): number;
    getSeconds(): number;
    getTimeOfDay(): number;
    getYear(): number;
    getZone(): TimeZone;
    getZoneOffset(): number;
    hashCode(): number;
    isDaylightTime(): boolean;
    isLeapYear(): boolean;
    isNormalized(): boolean;
    isSameDate(arg0: CalendarDate): boolean;
    setDate(arg0: number, arg1: number, arg2: number): CalendarDate;
    setDayOfMonth(arg0: number): CalendarDate;
    setDayOfWeek(arg0: number): void;
    setDaylightSaving(arg0: number): void;
    setEra(arg0: Era): CalendarDate;
    setHours(arg0: number): CalendarDate;
    setLeapYear(arg0: boolean): void;
    setMillis(arg0: number): CalendarDate;
    setMinutes(arg0: number): CalendarDate;
    setMonth(arg0: number): CalendarDate;
    setNormalized(arg0: boolean): void;
    setSeconds(arg0: number): CalendarDate;
    setTimeOfDay(arg0: number, arg1: number, arg2: number, arg3: number): CalendarDate;
    setTimeOfDay(arg0: number): void;
    setYear(arg0: number): CalendarDate;
    setZone(arg0: TimeZone): CalendarDate;
    setZoneOffset(arg0: number): void;
    toString(): string;
}