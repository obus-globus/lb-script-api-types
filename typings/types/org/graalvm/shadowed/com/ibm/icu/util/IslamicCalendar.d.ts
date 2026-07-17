import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Calendar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar.d.ts'
import type { Calendar$WeekData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar$WeekData.d.ts'
import type { IslamicCalendar$Algorithm } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/IslamicCalendar$Algorithm.d.ts'
import type { IslamicCalendar$CalculationType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/IslamicCalendar$CalculationType.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class IslamicCalendar extends Calendar {
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
    static DHU_AL_HIJJAH: number;
    static DHU_AL_QIDAH: number;
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
    static JUMADA_1: number;
    static JUMADA_2: number;
    static JUNE: number;
    static MARCH: number;
    static MAY: number;
    static MILLISECOND: number;
    static MILLISECONDS_IN_DAY: number;
    static MINUTE: number;
    static MONDAY: number;
    static MONTH: number;
    static MUHARRAM: number;
    static NOVEMBER: number;
    static OCTOBER: number;
    static ORDINAL_MONTH: number;
    static PM: number;
    static RABI_1: number;
    static RABI_2: number;
    static RAJAB: number;
    static RAMADAN: number;
    static SAFAR: number;
    static SATURDAY: number;
    static SECOND: number;
    static SEPTEMBER: number;
    static SHABAN: number;
    static SHAWWAL: number;
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
    static getAvailableLocales(): Locale[];
    static getAvailableULocales(): ULocale[];
    static getDateAtTimePattern(paramcal: Calendar, paramuLocale: ULocale, paramdateStyle: number): string;
    static getDateTimePattern(paramcal: Calendar, paramuLocale: ULocale, paramdateStyle: number): string;
    static getInstance(): Calendar;
    static getInstance(paramaLocale: Locale): Calendar;
    static getInstance(paramzone: TimeZone): Calendar;
    static getInstance(paramzone: TimeZone, paramaLocale: Locale): Calendar;
    static getInstance(paramzone: TimeZone, paramlocale: ULocale): Calendar;
    static getInstance(paramlocale: ULocale): Calendar;
    static getKeywordValuesForLocale(paramkey: string, paramlocale: ULocale, paramcommonlyUsed: boolean): string[];
    static getWeekDataForRegion(paramregion: string): Calendar$WeekData;
    constructor()
    constructor(date: Date)
    constructor(aLocale: Locale)
    constructor(year: number, month: number, date: number)
    constructor(year: number, month: number, date: number, hour: number, minute: number, second: number)
    constructor(zone: TimeZone)
    constructor(zone: TimeZone, aLocale: Locale)
    constructor(zone: TimeZone, locale: ULocale)
    constructor(locale: ULocale)
    // private algorithm: IslamicCalendar$Algorithm;
    // private cType: IslamicCalendar$CalculationType;
    readonly civil: boolean;
    getCalculationType(): IslamicCalendar$CalculationType;
    getRelatedYear(): number;
    getType(): string;
    handleComputeFields(julianDay: number): void;
    handleComputeMonthStart(eyear: number, month: number, useMonth: boolean): number;
    handleGetExtendedYear(): number;
    handleGetLimit(field: number, limitType: number): number;
    handleGetMonthLength(extendedYear: number, month: number): number;
    handleGetYearLength(extendedYear: number): number;
    inTemporalLeapYear(): boolean;
    isCivil(): boolean;
    // private readObject(in_: ObjectInputStream): void;
    // private setCalcTypeForLocale(locale: ULocale): void;
    setCalculationType(type: IslamicCalendar$CalculationType): void;
    setCivil(beCivil: boolean): void;
    setRelatedYear(year: number): void;
    // private yearStart(year: number): number;
}