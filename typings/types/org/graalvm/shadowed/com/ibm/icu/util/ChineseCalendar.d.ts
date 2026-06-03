import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CalendarCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CalendarCache.d.ts'
import type { DateFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormat.d.ts'
import type { Calendar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar.d.ts'
import type { Calendar$WeekData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar$WeekData.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ChineseCalendar extends Calendar {
    static AM: number;
    static AM_PM: number;
    static APRIL: number;
    static AUGUST: number;
    static DATE: number;
    static DAY_OF_MONTH: number;
    static DAY_OF_WEEK: number;
    static DAY_OF_WEEK_IN_MONTH: number;
    static DAY_OF_YEAR: number;
    static DECEMBER: number;
    static DOW_LOCAL: number;
    static DST_OFFSET: number;
    static ERA: number;
    static EXTENDED_YEAR: number;
    static FEBRUARY: number;
    static FRIDAY: number;
    static HOUR: number;
    static HOUR_OF_DAY: number;
    static IS_LEAP_MONTH: number;
    static JANUARY: number;
    static JULIAN_DAY: number;
    static JULY: number;
    static JUNE: number;
    static MARCH: number;
    static MAY: number;
    static MILLISECOND: number;
    static MILLISECONDS_IN_DAY: number;
    static MINUTE: number;
    static MONDAY: number;
    static MONTH: number;
    static NOVEMBER: number;
    static OCTOBER: number;
    static ORDINAL_MONTH: number;
    static PM: number;
    static SATURDAY: number;
    static SECOND: number;
    static SEPTEMBER: number;
    static SUNDAY: number;
    static THURSDAY: number;
    static TUESDAY: number;
    static UNDECIMBER: number;
    static WALLTIME_FIRST: number;
    static WALLTIME_LAST: number;
    static WALLTIME_NEXT_VALID: number;
    static WEDNESDAY: number;
    static WEEKDAY: number;
    static WEEKEND: number;
    static WEEKEND_CEASE: number;
    static WEEKEND_ONSET: number;
    static WEEK_OF_MONTH: number;
    static WEEK_OF_YEAR: number;
    static YEAR: number;
    static YEAR_WOY: number;
    static ZONE_OFFSET: number;
    static getAvailableLocales(): (Object | null)[];
    static getAvailableULocales(): (Object | null)[];
    static getDateAtTimePattern(paramcal: Calendar, paramuLocale: ULocale, paramdateStyle: number): string;
    static getDateTimePattern(paramcal: Calendar, paramuLocale: ULocale, paramdateStyle: number): string;
    static getInstance(): Calendar;
    static getInstance(paramaLocale: Locale): Calendar;
    static getInstance(paramzone: TimeZone): Calendar;
    static getInstance(paramzone: TimeZone, paramaLocale: Locale): Calendar;
    static getInstance(paramzone: TimeZone, paramlocale: ULocale): Calendar;
    static getInstance(paramlocale: ULocale): Calendar;
    static getKeywordValuesForLocale(paramkey: string, paramlocale: ULocale, paramcommonlyUsed: boolean): (Object | null)[];
    static getWeekDataForRegion(paramregion: string): Calendar$WeekData;
    constructor()
    constructor(date: Date)
    constructor(aLocale: Locale)
    constructor(year: number, month: number, isLeapMonth: number, date: number)
    constructor(era: number, year: number, month: number, isLeapMonth: number, date: number)
    constructor(year: number, month: number, isLeapMonth: number, date: number, hour: number, minute: number, second: number)
    constructor(era: number, year: number, month: number, isLeapMonth: number, date: number, hour: number, minute: number, second: number)
    constructor(zone: TimeZone)
    constructor(zone: TimeZone, aLocale: Locale)
    constructor(zone: TimeZone, locale: ULocale)
    constructor(zone: TimeZone, locale: ULocale, epochYear: number, zoneAstroCalc: TimeZone)
    constructor(locale: ULocale)
    // private epochYear: number;
    // private hasLeapMonthBetweenWinterSolstices: boolean;
    // private newYearCache: CalendarCache;
    // private winterSolsticeCache: CalendarCache;
    // private zoneAstro: TimeZone;
    add(field: number, amount: number): void;
    // private computeChineseFields(days: number, gyear: number, gmonth: number, setAllFields: boolean): void;
    // private daysToMillis(days: number): number;
    getFieldResolutionTable(): number[][][];
    getTemporalMonthCode(): string;
    getType(): string;
    handleComputeFields(julianDay: number): void;
    handleComputeMonthStart(eyear: number, month: number, useMonth: boolean): number;
    handleGetDateFormat(pattern: string, locale: Locale): DateFormat;
    handleGetDateFormat(pattern: string, override: string, locale: Locale): DateFormat;
    handleGetDateFormat(pattern: string, override: string, locale: ULocale): DateFormat;
    handleGetDateFormat(pattern: string, locale: ULocale): DateFormat;
    handleGetExtendedYear(): number;
    handleGetLimit(field: number, limitType: number): number;
    handleGetMonthLength(extendedYear: number, month: number): number;
    // private hasNoMajorSolarTerm(newMoon: number): boolean;
    haveDefaultCentury(): boolean;
    inTemporalLeapYear(): boolean;
    internalGetMonth(): number;
    internalGetMonth(defaultValue: number): number;
    // private isLeapMonthBetween(newMoon1: number, newMoon2: number): boolean;
    // private majorSolarTerm(days: number): number;
    // private millisToDays(millis: number): number;
    // private newMoonNear(days: number, after: boolean): number;
    // private newYear(gyear: number): number;
    // private offsetMonth(newMoon: number, dom: number, delta: number): void;
    // private readObject(stream: ObjectInputStream): void;
    roll(field: number, up: boolean): void;
    roll(field: number, amount: number): void;
    setTemporalMonthCode(temporalMonth: string): void;
    // private synodicMonthsBetween(day1: number, day2: number): number;
    // private winterSolstice(gyear: number): number;
}