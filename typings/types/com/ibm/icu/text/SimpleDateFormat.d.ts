import type { DayPeriodRules$DayPeriod } from '../../../../com/ibm/icu/impl/DayPeriodRules$DayPeriod.d.ts'
import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { DateFormat } from '../../../../com/ibm/icu/text/DateFormat.d.ts'
import type { DateFormat$Field } from '../../../../com/ibm/icu/text/DateFormat$Field.d.ts'
import type { DateFormatSymbols } from '../../../../com/ibm/icu/text/DateFormatSymbols.d.ts'
import type { DisplayContext } from '../../../../com/ibm/icu/text/DisplayContext.d.ts'
import type { MessageFormat } from '../../../../com/ibm/icu/text/MessageFormat.d.ts'
import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { TimeZoneFormat } from '../../../../com/ibm/icu/text/TimeZoneFormat.d.ts'
import type { TimeZoneFormat$TimeType } from '../../../../com/ibm/icu/text/TimeZoneFormat$TimeType.d.ts'
import type { Calendar } from '../../../../com/ibm/icu/util/Calendar.d.ts'
import type { Calendar$FormatConfiguration } from '../../../../com/ibm/icu/util/Calendar$FormatConfiguration.d.ts'
import type { Output } from '../../../../com/ibm/icu/util/Output.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Type } from '../../../../com/ibm/icu/util/ULocale$Type.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { AttributedCharacterIterator } from '../../../../java/text/AttributedCharacterIterator.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Temporal } from '../../../../java/time/temporal/Temporal.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class SimpleDateFormat extends DateFormat {
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
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: DateFormatSymbols)
    private constructor(arg0: string, arg1: DateFormatSymbols, arg2: Calendar, arg3: NumberFormat, arg4: ULocale, arg5: boolean, arg6: string)
    constructor(arg0: string, arg1: DateFormatSymbols, arg2: Calendar, arg3: ULocale, arg4: boolean, arg5: string)
    constructor(arg0: string, arg1: DateFormatSymbols, arg2: ULocale)
    constructor(arg0: string, arg1: ULocale)
    constructor(arg0: string, arg1: Locale)
    constructor(arg0: string, arg1: string, arg2: ULocale)
    // private capitalizationBrkIter: BreakIterator;
    // private decDigits: string[];
    // private decimalBuf: string[];
    // private defaultCenturyBase: number;
    // private defaultCenturyStart: Date;
    // private defaultCenturyStartYear: number;
    // private formatData: DateFormatSymbols;
    // private hasHanYearChar: boolean;
    // private hasMinute: boolean;
    // private hasSecond: boolean;
    // private locale: ULocale;
    // private numberFormatters: { [key: string]: NumberFormat };
    // private override: string;
    // private overrideMap: { [key: string]: string };
    // private pattern: string;
    // private patternItems: Object[];
    // private serialVersionOnStream: number;
    // private tzFormat: TimeZoneFormat;
    // private useFastFormat: boolean;
    // private useLocalZeroPaddingNumberFormat: boolean;
    // private allowNumericFallback(arg0: number): boolean;
    applyLocalizedPattern(arg0: string): void;
    applyPattern(arg0: string): void;
    clone(): Object;
    // private diffCalFieldValue(arg0: Calendar, arg1: Calendar, arg2: Object[], arg3: number): boolean;
    equals(arg0: Object | null): boolean;
    // private fastZeroPaddingNumber(arg0: StringBuffer, arg1: number, arg2: number, arg3: number): void;
    // private format(arg0: Calendar, arg1: DisplayContext, arg2: StringBuffer, arg3: FieldPosition, arg4: FieldPosition[]): StringBuffer;
    format(arg0: Calendar, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Calendar, arg1: StringBuffer, arg2: FieldPosition, arg3: FieldPosition[]): StringBuffer;
    format(arg0: Temporal): string;
    format(arg0: Temporal, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Date): string;
    format(arg0: Date, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Object): string;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    formatToCharacterIterator(arg0: Object): AttributedCharacterIterator;
    get2DigitYearStart(): Date;
    getDateFormatSymbols(): DateFormatSymbols;
    // private getDefaultCenturyStart(): Date;
    // private getDefaultCenturyStartYear(): number;
    getLocale(): ULocale;
    getLocale(arg0: ULocale$Type): ULocale;
    getNumberFormat(): NumberFormat;
    getNumberFormat(arg0: string): NumberFormat;
    // private getPatternItems(): Object[];
    getSymbols(): DateFormatSymbols;
    getTimeZoneFormat(): TimeZoneFormat;
    hashCode(): number;
    // private initLocalZeroPaddingNumberFormat(): void;
    // private initNumberFormatters(arg0: ULocale): void;
    // private initialize(): void;
    // private initializeDefaultCenturyStart(arg0: number): void;
    // private initializeTimeZoneFormat(arg0: boolean): void;
    intervalFormatByAlgorithm(arg0: Calendar, arg1: Calendar, arg2: StringBuffer, arg3: FieldPosition): StringBuffer;
    isFieldUnitIgnored(arg0: number): boolean;
    // private lowerLevel(arg0: Object[], arg1: number, arg2: number): boolean;
    // private matchAlphaMonthStrings(arg0: string, arg1: number, arg2: string[], arg3: string[], arg4: Calendar): number;
    // private matchDayPeriodString(arg0: string, arg1: number, arg2: string[], arg3: number, arg4: Output<DayPeriodRules$DayPeriod>): number;
    // private matchLiteral(arg0: string, arg1: number, arg2: Object[], arg3: number, arg4: (Object | null)[]): number;
    matchQuarterString(arg0: string, arg1: number, arg2: number, arg3: string[], arg4: Calendar): number;
    matchString(arg0: string, arg1: number, arg2: number, arg3: string[], arg4: Calendar): number;
    // private matchString(arg0: string, arg1: number, arg2: number, arg3: string[], arg4: string, arg5: Calendar): number;
    parse(arg0: string): Date;
    parse(arg0: string, arg1: Calendar, arg2: ParsePosition): void;
    parse(arg0: string, arg1: ParsePosition): Date;
    // private parseAmbiguousDatesAsAfter(arg0: Date): void;
    // private parseInt(arg0: string, arg1: ParsePosition, arg2: boolean, arg3: NumberFormat): Number;
    // private parseInt(arg0: string, arg1: number, arg2: ParsePosition, arg3: boolean, arg4: NumberFormat): Number;
    // private parsePattern(): void;
    patternCharToDateFormatField(arg0: string): DateFormat$Field;
    // private processOverrideString(arg0: ULocale, arg1: string): void;
    // private readObject(arg0: ObjectInputStream): void;
    // private regionMatchesWithOptionalDot(arg0: string, arg1: number, arg2: string, arg3: number): number;
    set2DigitYearStart(arg0: Date): void;
    setContext(arg0: DisplayContext): void;
    setDateFormatSymbols(arg0: DateFormatSymbols): void;
    setNumberFormat(arg0: NumberFormat): void;
    setNumberFormat(arg0: string, arg1: NumberFormat): void;
    setTimeZoneFormat(arg0: TimeZoneFormat): void;
    subFormat(arg0: StringBuffer, arg1: string, arg2: number, arg3: number, arg4: number, arg5: DisplayContext, arg6: FieldPosition, arg7: string, arg8: Calendar): void;
    subFormat(arg0: string, arg1: number, arg2: number, arg3: FieldPosition, arg4: DateFormatSymbols, arg5: Calendar): string;
    subFormat(arg0: string, arg1: number, arg2: number, arg3: number, arg4: DisplayContext, arg5: FieldPosition, arg6: string, arg7: Calendar): string;
    subParse(arg0: string, arg1: number, arg2: string, arg3: number, arg4: boolean, arg5: boolean, arg6: (Object | null)[], arg7: Calendar): number;
    // private subParse(arg0: string, arg1: number, arg2: string, arg3: number, arg4: boolean, arg5: boolean, arg6: (Object | null)[], arg7: Calendar, arg8: MessageFormat, arg9: Output<TimeZoneFormat$TimeType>): number;
    // private subParse(arg0: string, arg1: number, arg2: string, arg3: number, arg4: boolean, arg5: boolean, arg6: (Object | null)[], arg7: Calendar, arg8: MessageFormat, arg9: Output<TimeZoneFormat$TimeType>, arg10: Output<DayPeriodRules$DayPeriod>): number;
    toLocalizedPattern(): string;
    toPattern(): string;
    // private translatePattern(arg0: string, arg1: string, arg2: string): string;
    // private tzFormat(): TimeZoneFormat;
    // private writeObject(arg0: ObjectOutputStream): void;
    zeroPaddingNumber(arg0: NumberFormat, arg1: StringBuffer, arg2: number, arg3: number, arg4: number): void;
    zeroPaddingNumber(arg0: number, arg1: number, arg2: number): string;
}