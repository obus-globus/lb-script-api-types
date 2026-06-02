import type { Calendar } from '../../../../com/ibm/icu/util/Calendar.d.ts'
import type { Calendar$WeekData } from '../../../../com/ibm/icu/util/Calendar$WeekData.d.ts'
import type { IslamicCalendar$Algorithm } from '../../../../com/ibm/icu/util/IslamicCalendar$Algorithm.d.ts'
import type { IslamicCalendar$CalculationType } from '../../../../com/ibm/icu/util/IslamicCalendar$CalculationType.d.ts'
import type { TimeZone } from '../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
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
    // private algorithm: IslamicCalendar$Algorithm;
    // private cType: IslamicCalendar$CalculationType;
    readonly civil: boolean;
    getCalculationType(): IslamicCalendar$CalculationType;
    getType(): string;
    handleComputeFields(arg0: number): void;
    handleComputeMonthStart(arg0: number, arg1: number, arg2: boolean): number;
    handleGetExtendedYear(): number;
    handleGetLimit(arg0: number, arg1: number): number;
    handleGetMonthLength(arg0: number, arg1: number): number;
    handleGetYearLength(arg0: number): number;
    inTemporalLeapYear(): boolean;
    isCivil(): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    // private setCalcTypeForLocale(arg0: ULocale): void;
    setCalculationType(arg0: IslamicCalendar$CalculationType): void;
    setCivil(arg0: boolean): void;
    // private yearStart(arg0: number): number;
}