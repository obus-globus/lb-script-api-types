import type { Calendar } from '../../../../com/ibm/icu/util/Calendar.d.ts'
import type { Calendar$WeekData } from '../../../../com/ibm/icu/util/Calendar$WeekData.d.ts'
import type { GregorianCalendar } from '../../../../com/ibm/icu/util/GregorianCalendar.d.ts'
import type { TimeZone } from '../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TaiwanCalendar extends GregorianCalendar {
    static AD: number;
    static AM: number;
    static AM_PM: number;
    static APRIL: number;
    static AUGUST: number;
    static BC: number;
    static BEFORE_MINGUO: number;
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
    static MINGUO: number;
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
    static getDateAtTimePattern(paramarg0: Calendar, paramarg1: ULocale, paramarg2: number): string;
    static getDateTimePattern(paramarg0: Calendar, paramarg1: ULocale, paramarg2: number): string;
    static getInstance(): Calendar;
    static getInstance(paramarg0: TimeZone): Calendar;
    static getInstance(paramarg0: TimeZone, paramarg1: ULocale): Calendar;
    static getInstance(paramarg0: TimeZone, paramarg1: Locale): Calendar;
    static getInstance(paramarg0: ULocale): Calendar;
    static getInstance(paramarg0: Locale): Calendar;
    static getKeywordValuesForLocale(paramarg0: string, paramarg1: ULocale, paramarg2: boolean): (Object | null)[];
    static getWeekDataForRegion(paramarg0: string): Calendar$WeekData;
    constructor()
    constructor(arg0: TimeZone)
    constructor(arg0: TimeZone, arg1: ULocale)
    constructor(arg0: TimeZone, arg1: Locale)
    constructor(arg0: ULocale)
    constructor(arg0: Date)
    constructor(arg0: Locale)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    getType(): string;
    handleComputeFields(arg0: number): void;
    handleGetExtendedYear(): number;
    handleGetLimit(arg0: number, arg1: number): number;
}