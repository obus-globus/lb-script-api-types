import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { CECalendar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CECalendar.d.ts'
import type { Calendar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar.d.ts'
import type { Calendar$WeekData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar$WeekData.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class EthiopicCalendar extends CECalendar {
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
    static GENBOT: number;
    static HAMLE: number;
    static HEDAR: number;
    static HOUR: number;
    static HOUR_OF_DAY: number;
    static IS_LEAP_MONTH: number;
    static JANUARY: number;
    static JULIAN_DAY: number;
    static JULY: number;
    static JUNE: number;
    static MARCH: number;
    static MAY: number;
    static MEGABIT: number;
    static MESKEREM: number;
    static MIAZIA: number;
    static MILLISECOND: number;
    static MILLISECONDS_IN_DAY: number;
    static MINUTE: number;
    static MONDAY: number;
    static MONTH: number;
    static NEHASSE: number;
    static NOVEMBER: number;
    static OCTOBER: number;
    static ORDINAL_MONTH: number;
    static PAGUMEN: number;
    static PM: number;
    static SATURDAY: number;
    static SECOND: number;
    static SENE: number;
    static SEPTEMBER: number;
    static SUNDAY: number;
    static TAHSAS: number;
    static TEKEMT: number;
    static TER: number;
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
    static YEKATIT: number;
    static ZONE_OFFSET: number;
    static EthiopicToJD(paramyear: number, parammonth: number, paramdate: number): number;
    static ceToJD(paramyear: number, parammonth: number, paramday: number, paramjdEpochOffset: number): number;
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
    static jdToCE(paramjulianDay: number, paramjdEpochOffset: number, paramfields: number[]): void;
    constructor()
    constructor(date: Date)
    constructor(aLocale: Locale)
    constructor(year: number, month: number, date: number)
    constructor(year: number, month: number, date: number, hour: number, minute: number, second: number)
    constructor(zone: TimeZone)
    constructor(zone: TimeZone, aLocale: Locale)
    constructor(zone: TimeZone, locale: ULocale)
    constructor(locale: ULocale)
    // private eraType: number;
    extendedYearToEra(eyear: number): number;
    extendedYearToYear(eyear: number): number;
    getJDEpochOffset(): number;
    getRelatedYearDifference(): number;
    getType(): string;
    handleGetExtendedYear(): number;
    handleGetLimit(field: number, limitType: number): number;
    isAmeteAlemEra(): boolean;
    setAmeteAlemEra(onOff: boolean): void;
    // private setCalcTypeForLocale(locale: ULocale): void;
}