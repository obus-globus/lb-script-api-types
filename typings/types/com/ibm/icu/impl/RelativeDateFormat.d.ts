import type { RelativeDateFormat$URelativeString } from '../../../../com/ibm/icu/impl/RelativeDateFormat$URelativeString.d.ts'
import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { DateFormat } from '../../../../com/ibm/icu/text/DateFormat.d.ts'
import type { DisplayContext } from '../../../../com/ibm/icu/text/DisplayContext.d.ts'
import type { MessageFormat } from '../../../../com/ibm/icu/text/MessageFormat.d.ts'
import type { SimpleDateFormat } from '../../../../com/ibm/icu/text/SimpleDateFormat.d.ts'
import type { Calendar } from '../../../../com/ibm/icu/util/Calendar.d.ts'
import type { TimeZone } from '../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Temporal } from '../../../../java/time/temporal/Temporal.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RelativeDateFormat extends DateFormat {
    static ABBR_GENERIC_TZ: string;
    static ABBR_MONTH: string;
    static ABBR_MONTH_DAY: string;
    static ABBR_MONTH_WEEKDAY_DAY: string;
    static ABBR_QUARTER: string;
    static ABBR_SPECIFIC_TZ: string;
    static ABBR_STANDALONE_MONTH: string;
    static ABBR_UTC_TZ: string;
    static ABBR_WEEKDAY: string;
    static AM_PM_FIELD: number;
    static AM_PM_MIDNIGHT_NOON_FIELD: number;
    static DATE_FIELD: number;
    static DATE_SKELETONS: string[];
    static DAY: string;
    static DAY_OF_WEEK_FIELD: number;
    static DAY_OF_WEEK_IN_MONTH_FIELD: number;
    static DAY_OF_YEAR_FIELD: number;
    static DEFAULT: number;
    static DOW_LOCAL_FIELD: number;
    static ERA_FIELD: number;
    static EXTENDED_YEAR_FIELD: number;
    static FIELD_COUNT: number;
    static FLEXIBLE_DAY_PERIOD_FIELD: number;
    static FRACTIONAL_SECOND_FIELD: number;
    static FULL: number;
    static GENERIC_TZ: string;
    static HOUR: string;
    static HOUR0_FIELD: number;
    static HOUR1_FIELD: number;
    static HOUR24: string;
    static HOUR24_MINUTE: string;
    static HOUR24_MINUTE_SECOND: string;
    static HOUR_GENERIC_TZ: string;
    static HOUR_MINUTE: string;
    static HOUR_MINUTE_GENERIC_TZ: string;
    static HOUR_MINUTE_SECOND: string;
    static HOUR_MINUTE_TZ: string;
    static HOUR_OF_DAY0_FIELD: number;
    static HOUR_OF_DAY1_FIELD: number;
    static HOUR_TZ: string;
    static JP_ERA_2019_JA: string;
    static JP_ERA_2019_NARROW: string;
    static JP_ERA_2019_ROOT: string;
    static JULIAN_DAY_FIELD: number;
    static LOCATION_TZ: string;
    static LONG: number;
    static MEDIUM: number;
    static MILLISECONDS_IN_DAY_FIELD: number;
    static MILLISECOND_FIELD: number;
    static MINUTE: string;
    static MINUTE_FIELD: number;
    static MINUTE_SECOND: string;
    static MONTH: string;
    static MONTH_DAY: string;
    static MONTH_FIELD: number;
    static MONTH_WEEKDAY_DAY: string;
    static NONE: number;
    static NUM_MONTH: string;
    static NUM_MONTH_DAY: string;
    static NUM_MONTH_WEEKDAY_DAY: string;
    static QUARTER: string;
    static QUARTER_FIELD: number;
    static RELATIVE: number;
    static RELATIVE_DEFAULT: number;
    static RELATIVE_FULL: number;
    static RELATIVE_LONG: number;
    static RELATIVE_MEDIUM: number;
    static RELATIVE_SHORT: number;
    static SECOND: string;
    static SECOND_FIELD: number;
    static SHORT: number;
    static SPECIFIC_TZ: string;
    static STANDALONE_DAY_FIELD: number;
    static STANDALONE_MONTH: string;
    static STANDALONE_MONTH_FIELD: number;
    static STANDALONE_QUARTER_FIELD: number;
    static TIMEZONE_FIELD: number;
    static TIMEZONE_GENERIC_FIELD: number;
    static TIMEZONE_ISO_FIELD: number;
    static TIMEZONE_ISO_LOCAL_FIELD: number;
    static TIMEZONE_LOCALIZED_GMT_OFFSET_FIELD: number;
    static TIMEZONE_RFC_FIELD: number;
    static TIMEZONE_SPECIAL_FIELD: number;
    static TIME_SEPARATOR: number;
    static TIME_SKELETONS: string[];
    static WEEKDAY: string;
    static WEEK_OF_MONTH_FIELD: number;
    static WEEK_OF_YEAR_FIELD: number;
    static YEAR: string;
    static YEAR_ABBR_MONTH: string;
    static YEAR_ABBR_MONTH_DAY: string;
    static YEAR_ABBR_MONTH_WEEKDAY_DAY: string;
    static YEAR_ABBR_QUARTER: string;
    static YEAR_FIELD: number;
    static YEAR_MONTH: string;
    static YEAR_MONTH_DAY: string;
    static YEAR_MONTH_WEEKDAY_DAY: string;
    static YEAR_NAME_FIELD: number;
    static YEAR_NUM_MONTH: string;
    static YEAR_NUM_MONTH_DAY: string;
    static YEAR_NUM_MONTH_WEEKDAY_DAY: string;
    static YEAR_QUARTER: string;
    static YEAR_WOY_FIELD: number;
    static ZONE_SKELETONS: string[];
    static getAvailableLocales(): Locale[];
    static getAvailableULocales(): ULocale[];
    static getDateInstance(): DateFormat;
    static getDateInstance(paramarg0: Calendar, paramarg1: number): DateFormat;
    static getDateInstance(paramarg0: Calendar, paramarg1: number, paramarg2: ULocale): DateFormat;
    static getDateInstance(paramarg0: Calendar, paramarg1: number, paramarg2: Locale): DateFormat;
    static getDateInstance(paramarg0: number): DateFormat;
    static getDateInstance(paramarg0: number, paramarg1: ULocale): DateFormat;
    static getDateInstance(paramarg0: number, paramarg1: Locale): DateFormat;
    static getDateTimeInstance(): DateFormat;
    static getDateTimeInstance(paramarg0: Calendar, paramarg1: number, paramarg2: number): DateFormat;
    static getDateTimeInstance(paramarg0: Calendar, paramarg1: number, paramarg2: number, paramarg3: ULocale): DateFormat;
    static getDateTimeInstance(paramarg0: Calendar, paramarg1: number, paramarg2: number, paramarg3: Locale): DateFormat;
    static getDateTimeInstance(paramarg0: number, paramarg1: number): DateFormat;
    static getDateTimeInstance(paramarg0: number, paramarg1: number, paramarg2: ULocale): DateFormat;
    static getDateTimeInstance(paramarg0: number, paramarg1: number, paramarg2: Locale): DateFormat;
    static getInstance(): DateFormat;
    static getInstance(paramarg0: Calendar): DateFormat;
    static getInstance(paramarg0: Calendar, paramarg1: ULocale): DateFormat;
    static getInstance(paramarg0: Calendar, paramarg1: Locale): DateFormat;
    static getInstanceForSkeleton(paramarg0: Calendar, paramarg1: string, paramarg2: ULocale): DateFormat;
    static getInstanceForSkeleton(paramarg0: Calendar, paramarg1: string, paramarg2: Locale): DateFormat;
    static getInstanceForSkeleton(paramarg0: string): DateFormat;
    static getInstanceForSkeleton(paramarg0: string, paramarg1: ULocale): DateFormat;
    static getInstanceForSkeleton(paramarg0: string, paramarg1: Locale): DateFormat;
    static getPatternInstance(paramarg0: Calendar, paramarg1: string, paramarg2: ULocale): DateFormat;
    static getPatternInstance(paramarg0: Calendar, paramarg1: string, paramarg2: Locale): DateFormat;
    static getPatternInstance(paramarg0: string): DateFormat;
    static getPatternInstance(paramarg0: string, paramarg1: ULocale): DateFormat;
    static getPatternInstance(paramarg0: string, paramarg1: Locale): DateFormat;
    static getTimeInstance(): DateFormat;
    static getTimeInstance(paramarg0: Calendar, paramarg1: number): DateFormat;
    static getTimeInstance(paramarg0: Calendar, paramarg1: number, paramarg2: ULocale): DateFormat;
    static getTimeInstance(paramarg0: Calendar, paramarg1: number, paramarg2: Locale): DateFormat;
    static getTimeInstance(paramarg0: number): DateFormat;
    static getTimeInstance(paramarg0: number, paramarg1: ULocale): DateFormat;
    static getTimeInstance(paramarg0: number, paramarg1: Locale): DateFormat;
    constructor(arg0: number, arg1: number, arg2: ULocale, arg3: Calendar)
    // private capitalizationBrkIter: BreakIterator;
    // private capitalizationInfoIsSet: boolean;
    // private capitalizationOfRelativeUnitsForListOrMenu: boolean;
    // private capitalizationOfRelativeUnitsForStandAlone: boolean;
    // private combinedFormatHasDateAtStart: boolean;
    // private fCombinedFormat: MessageFormat;
    // private fDateFormat: DateFormat;
    // private fDatePattern: string;
    // private fDateStyle: number;
    // private fDateTimeFormat: SimpleDateFormat;
    // private fDates: RelativeDateFormat$URelativeString[];
    // private fLocale: ULocale;
    // private fTimeFormat: DateFormat;
    // private fTimePattern: string;
    // private fTimeStyle: number;
    format(arg0: Calendar, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Temporal): string;
    format(arg0: Temporal, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Date): string;
    format(arg0: Date, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Object): string;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    // private getStringForDay(arg0: number): string;
    // private initCapitalizationContextInfo(arg0: ULocale): void;
    // private initializeCalendar(arg0: TimeZone, arg1: ULocale): Calendar;
    // private initializeCombinedFormat(arg0: Calendar, arg1: ULocale): MessageFormat;
    // private loadDates(): void;
    parse(arg0: string): Date;
    parse(arg0: string, arg1: Calendar, arg2: ParsePosition): void;
    parse(arg0: string, arg1: ParsePosition): Date;
    setContext(arg0: DisplayContext): void;
}