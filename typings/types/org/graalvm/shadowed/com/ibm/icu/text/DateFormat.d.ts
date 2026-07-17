import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Temporal } from '../../../../../../../java/time/temporal/Temporal.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DateFormat$BooleanAttribute } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormat$BooleanAttribute.d.ts'
import type { DisplayContext } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayContext.d.ts'
import type { DisplayContext$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayContext$Type.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { UFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UFormat.d.ts'
import type { Calendar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class DateFormat extends UFormat {
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
    static getDateInstance(paramstyle: number): DateFormat;
    static getDateInstance(paramstyle: number, paramaLocale: Locale): DateFormat;
    static getDateInstance(paramstyle: number, paramlocale: ULocale): DateFormat;
    static getDateInstance(paramcal: Calendar, paramdateStyle: number): DateFormat;
    static getDateInstance(paramcal: Calendar, paramdateStyle: number, paramlocale: Locale): DateFormat;
    static getDateInstance(paramcal: Calendar, paramdateStyle: number, paramlocale: ULocale): DateFormat;
    static getDateTimeInstance(): DateFormat;
    static getDateTimeInstance(paramdateStyle: number, paramtimeStyle: number): DateFormat;
    static getDateTimeInstance(paramdateStyle: number, paramtimeStyle: number, paramaLocale: Locale): DateFormat;
    static getDateTimeInstance(paramdateStyle: number, paramtimeStyle: number, paramlocale: ULocale): DateFormat;
    static getDateTimeInstance(paramcal: Calendar, paramdateStyle: number, paramtimeStyle: number): DateFormat;
    static getDateTimeInstance(paramcal: Calendar, paramdateStyle: number, paramtimeStyle: number, paramlocale: Locale): DateFormat;
    static getDateTimeInstance(paramcal: Calendar, paramdateStyle: number, paramtimeStyle: number, paramlocale: ULocale): DateFormat;
    static getInstance(): DateFormat;
    static getInstance(paramcal: Calendar): DateFormat;
    static getInstance(paramcal: Calendar, paramlocale: Locale): DateFormat;
    static getInstance(paramcal: Calendar, paramlocale: ULocale): DateFormat;
    static getInstanceForSkeleton(paramskeleton: string): DateFormat;
    static getInstanceForSkeleton(paramskeleton: string, paramlocale: Locale): DateFormat;
    static getInstanceForSkeleton(paramskeleton: string, paramlocale: ULocale): DateFormat;
    static getInstanceForSkeleton(paramcal: Calendar, paramskeleton: string, paramlocale: Locale): DateFormat;
    static getInstanceForSkeleton(paramcal: Calendar, paramskeleton: string, paramlocale: ULocale): DateFormat;
    static getPatternInstance(paramskeleton: string): DateFormat;
    static getPatternInstance(paramskeleton: string, paramlocale: Locale): DateFormat;
    static getPatternInstance(paramskeleton: string, paramlocale: ULocale): DateFormat;
    static getPatternInstance(paramcal: Calendar, paramskeleton: string, paramlocale: Locale): DateFormat;
    static getPatternInstance(paramcal: Calendar, paramskeleton: string, paramlocale: ULocale): DateFormat;
    static getTimeInstance(): DateFormat;
    static getTimeInstance(paramstyle: number): DateFormat;
    static getTimeInstance(paramstyle: number, paramaLocale: Locale): DateFormat;
    static getTimeInstance(paramstyle: number, paramlocale: ULocale): DateFormat;
    static getTimeInstance(paramcal: Calendar, paramtimeStyle: number): DateFormat;
    static getTimeInstance(paramcal: Calendar, paramtimeStyle: number, paramlocale: Locale): DateFormat;
    static getTimeInstance(paramcal: Calendar, paramtimeStyle: number, paramlocale: ULocale): DateFormat;
    constructor()
    // private booleanAttributes: DateFormat$BooleanAttribute[];
    calendar: Calendar;
    // private capitalizationSetting: DisplayContext;
    numberFormat: NumberFormat;
    // private serialVersionOnStream: number;
    clone(): DateFormat;
    equals(obj: Object | null): boolean;
    format(date: Temporal): string;
    format(date: Temporal, toAppendTo: StringBuffer, fieldPosition: FieldPosition): StringBuffer;
    format(date: Date): string;
    format(date: Date, toAppendTo: StringBuffer, fieldPosition: FieldPosition): StringBuffer;
    format(arg0: Object): string;
    format(obj: Object, toAppendTo: StringBuffer, fieldPosition: FieldPosition): StringBuffer;
    format(cal: Calendar, toAppendTo: StringBuffer, fieldPosition: FieldPosition): StringBuffer;
    getBooleanAttribute(key: DateFormat$BooleanAttribute): boolean;
    getCalendar(): Calendar;
    getContext(type: DisplayContext$Type): DisplayContext;
    getNumberFormat(): NumberFormat;
    getTimeZone(): TimeZone;
    hashCode(): number;
    isCalendarLenient(): boolean;
    isLenient(): boolean;
    parse(text: string): Date;
    parse(text: string, pos: ParsePosition): Date;
    parse(text: string, cal: Calendar, pos: ParsePosition): void;
    parseObject(arg0: string): Object;
    parseObject(source: string, pos: ParsePosition): Object;
    // private readObject(stream: ObjectInputStream): void;
    setBooleanAttribute(key: DateFormat$BooleanAttribute, value: boolean): DateFormat;
    setCalendar(newCalendar: Calendar): void;
    setCalendarLenient(lenient: boolean): void;
    setContext(context: DisplayContext): void;
    setLenient(lenient: boolean): void;
    setNumberFormat(newNumberFormat: NumberFormat): void;
    setTimeZone(zone: TimeZone): void;
}