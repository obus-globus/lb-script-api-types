import type { DateFormat } from '../../../../com/ibm/icu/text/DateFormat.d.ts'
import type { DateFormat$Field } from '../../../../com/ibm/icu/text/DateFormat$Field.d.ts'
import type { DateFormatSymbols } from '../../../../com/ibm/icu/text/DateFormatSymbols.d.ts'
import type { DisplayContext } from '../../../../com/ibm/icu/text/DisplayContext.d.ts'
import type { SimpleDateFormat } from '../../../../com/ibm/icu/text/SimpleDateFormat.d.ts'
import type { Calendar } from '../../../../com/ibm/icu/util/Calendar.d.ts'
import type { Calendar$FormatConfiguration } from '../../../../com/ibm/icu/util/Calendar$FormatConfiguration.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChineseDateFormat extends SimpleDateFormat {
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
    static getAvailableLocales(): (Object | null)[];
    static getAvailableULocales(): (Object | null)[];
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
    static getInstance(paramarg0: Calendar$FormatConfiguration): SimpleDateFormat;
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
    constructor(arg0: string, arg1: ULocale)
    constructor(arg0: string, arg1: Locale)
    constructor(arg0: string, arg1: string, arg2: ULocale)
    patternCharToDateFormatField(arg0: string): DateFormat$Field;
    subFormat(arg0: StringBuffer, arg1: string, arg2: number, arg3: number, arg4: number, arg5: DisplayContext, arg6: FieldPosition, arg7: string, arg8: Calendar): void;
    subFormat(arg0: string, arg1: number, arg2: number, arg3: FieldPosition, arg4: DateFormatSymbols, arg5: Calendar): string;
    subFormat(arg0: string, arg1: number, arg2: number, arg3: number, arg4: DisplayContext, arg5: FieldPosition, arg6: string, arg7: Calendar): string;
    subParse(arg0: string, arg1: number, arg2: string, arg3: number, arg4: boolean, arg5: boolean, arg6: (Object | null)[], arg7: Calendar): number;
}