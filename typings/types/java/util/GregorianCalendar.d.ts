import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ZonedDateTime } from '../../java/time/ZonedDateTime.d.ts'
import type { Calendar } from '../../java/util/Calendar.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { TimeZone } from '../../java/util/TimeZone.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { BaseCalendar } from '../../sun/util/calendar/BaseCalendar.d.ts'
import type { BaseCalendar$Date } from '../../sun/util/calendar/BaseCalendar$Date.d.ts'
export class GregorianCalendar extends Calendar {
    static AD: number;
    static ALL_STYLES: number;
    static AM: number;
    static AM_PM: number;
    static APRIL: number;
    static AUGUST: number;
    static BC: number;
    static DATE: number;
    static DAY_OF_MONTH: number;
    static DAY_OF_WEEK: number;
    static DAY_OF_WEEK_IN_MONTH: number;
    static DAY_OF_YEAR: number;
    static DECEMBER: number;
    static DST_OFFSET: number;
    static ERA: number;
    static FEBRUARY: number;
    static FIELD_COUNT: number;
    static FRIDAY: number;
    static HOUR: number;
    static HOUR_OF_DAY: number;
    static JANUARY: number;
    static JULY: number;
    static JUNE: number;
    static LONG: number;
    static LONG_FORMAT: number;
    static LONG_STANDALONE: number;
    static MARCH: number;
    static MAY: number;
    static MILLISECOND: number;
    static MINUTE: number;
    static MONDAY: number;
    static MONTH: number;
    static NARROW_FORMAT: number;
    static NARROW_STANDALONE: number;
    static NOVEMBER: number;
    static OCTOBER: number;
    static PM: number;
    static SATURDAY: number;
    static SECOND: number;
    static SEPTEMBER: number;
    static SHORT: number;
    static SHORT_FORMAT: number;
    static SHORT_STANDALONE: number;
    static SUNDAY: number;
    static THURSDAY: number;
    static TUESDAY: number;
    static UNDECIMBER: number;
    static WEDNESDAY: number;
    static WEEK_OF_MONTH: number;
    static WEEK_OF_YEAR: number;
    static YEAR: number;
    static ZONE_OFFSET: number;
    static from(paramarg0: ZonedDateTime): GregorianCalendar;
    static getAvailableCalendarTypes(): string[];
    static getAvailableLocales(): Locale[];
    static getInstance(): Calendar;
    static getInstance(paramarg0: Locale): Calendar;
    static getInstance(paramarg0: TimeZone): Calendar;
    static getInstance(paramarg0: TimeZone, paramarg1: Locale): Calendar;
    constructor()
    constructor(arg0: Locale)
    constructor(arg0: TimeZone)
    constructor(arg0: TimeZone, arg1: Locale)
    constructor(arg0: TimeZone, arg1: Locale, arg2: boolean)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number)
    // private cachedFixedDate: number;
    // private calsys: BaseCalendar;
    // private cdate: BaseCalendar$Date;
    // private gdate: BaseCalendar$Date;
    // private gregorianCutover: number;
    // private gregorianCutoverDate: number;
    // private gregorianCutoverYear: number;
    // private gregorianCutoverYearJulian: number;
    // private originalFields: number[];
    // private zoneOffsets: number[];
    // private actualMonthLength(): number;
    add(arg0: number, arg1: number): void;
    clone(): Object;
    computeFields(): void;
    // private computeFields(arg0: number, arg1: number): number;
    computeTime(): void;
    // private dayInMinWeek(arg0: number, arg1: number, arg2: number): boolean;
    equals(arg0: Object | null): boolean;
    getActualMaximum(arg0: number): number;
    getActualMinimum(arg0: number): number;
    // private getCalendarDate(arg0: number): BaseCalendar$Date;
    getCalendarType(): string;
    // private getCurrentFixedDate(): number;
    // private getCutoverCalendarSystem(): BaseCalendar;
    // private getFixedDate(arg0: BaseCalendar, arg1: number, arg2: number): number;
    // private getFixedDateJan1(arg0: BaseCalendar$Date, arg1: number): number;
    // private getFixedDateMonth1(arg0: BaseCalendar$Date, arg1: number): number;
    getGreatestMinimum(arg0: number): number;
    getGregorianChange(): Date;
    // private getGregorianCutoverDate(): BaseCalendar$Date;
    // private getLastJulianDate(): BaseCalendar$Date;
    getLeastMaximum(arg0: number): number;
    getMaximum(arg0: number): number;
    getMinimum(arg0: number): number;
    // private getNormalizedCalendar(): GregorianCalendar;
    getTimeZone(): TimeZone;
    // private getWeekNumber(arg0: number, arg1: number): number;
    getWeekYear(): number;
    getWeeksInWeekYear(): number;
    // private getYearOffsetInMillis(): number;
    hashCode(): number;
    // private internalGetEra(): number;
    // private isCutoverYear(arg0: number): boolean;
    // private isInvalidWeek1(): boolean;
    isLeapYear(arg0: number): boolean;
    isWeekDateSupported(): boolean;
    // private monthLength(arg0: number): number;
    // private monthLength(arg0: number, arg1: number): number;
    // private pinDayOfMonth(): void;
    // private readObject(arg0: ObjectInputStream): void;
    roll(arg0: number, arg1: boolean): void;
    roll(arg0: number, arg1: number): void;
    setGregorianChange(arg0: Date): void;
    // private setGregorianChange(arg0: number): void;
    setTimeZone(arg0: TimeZone): void;
    setWeekDate(arg0: number, arg1: number, arg2: number): void;
    toZonedDateTime(): ZonedDateTime;
    // private yearLength(): number;
    // private yearLength(arg0: number): number;
}