import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../../../java/io/ObjectOutputStream.d.ts'
import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { AttributedCharacterIterator } from '../../../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { DayPeriodRules$DayPeriod } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/DayPeriodRules$DayPeriod.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { DateFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormat.d.ts'
import type { DateFormat$Field } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormat$Field.d.ts'
import type { DateFormatSymbols } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormatSymbols.d.ts'
import type { DisplayContext } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayContext.d.ts'
import type { MessageFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessageFormat.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { TimeZoneFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneFormat.d.ts'
import type { TimeZoneFormat$TimeType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneFormat$TimeType.d.ts'
import type { Calendar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar.d.ts'
import type { Calendar$FormatConfiguration } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar$FormatConfiguration.d.ts'
import type { Output } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Output.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
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
    static getInstance(paramformatConfig: Calendar$FormatConfiguration): SimpleDateFormat;
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
    constructor(pattern: string)
    constructor(pattern: string, loc: Locale)
    constructor(pattern: string, override: string, loc: ULocale)
    constructor(pattern: string, formatData: DateFormatSymbols)
    private constructor(pattern: string, formatData: DateFormatSymbols, calendar: Calendar, numberFormat: NumberFormat, locale: ULocale, useFastFormat: boolean, override: string)
    constructor(pattern: string, formatData: DateFormatSymbols, calendar: Calendar, locale: ULocale, useFastFormat: boolean, override: string)
    constructor(pattern: string, formatData: DateFormatSymbols, loc: ULocale)
    constructor(pattern: string, loc: ULocale)
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
    // private allowNumericFallback(patternCharIndex: number): boolean;
    applyLocalizedPattern(pat: string): void;
    applyPattern(pat: string): void;
    clone(): Object;
    // private diffCalFieldValue(fromCalendar: Calendar, toCalendar: Calendar, items: Object[], i: number): boolean;
    equals(obj: Object | null): boolean;
    // private fastZeroPaddingNumber(buf: StringBuffer, value: number, minDigits: number, maxDigits: number): void;
    format(cal: Calendar, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(cal: Calendar, toAppendTo: StringBuffer, pos: FieldPosition, attributes: FieldPosition[]): StringBuffer;
    // private format(cal: Calendar, capitalizationContext: DisplayContext, toAppendTo: StringBuffer, pos: FieldPosition, attributes: FieldPosition[]): StringBuffer;
    formatToCharacterIterator(obj: Object): AttributedCharacterIterator;
    get2DigitYearStart(): Date;
    getDateFormatSymbols(): DateFormatSymbols;
    // private getDefaultCenturyStart(): Date;
    // private getDefaultCenturyStartYear(): number;
    getLocale(): ULocale;
    getNumberFormat(field: string): NumberFormat;
    // private getPatternItems(): Object[];
    getSymbols(): DateFormatSymbols;
    getTimeZoneFormat(): TimeZoneFormat;
    hashCode(): number;
    // private initLocalZeroPaddingNumberFormat(): void;
    // private initNumberFormatters(loc: ULocale): void;
    // private initialize(): void;
    // private initializeDefaultCenturyStart(baseTime: number): void;
    // private initializeTimeZoneFormat(bForceUpdate: boolean): void;
    intervalFormatByAlgorithm(fromCalendar: Calendar, toCalendar: Calendar, appendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    isFieldUnitIgnored(field: number): boolean;
    // private lowerLevel(items: Object[], i: number, level: number): boolean;
    // private matchAlphaMonthStrings(text: string, start: number, wideData: string[], shortData: string[], cal: Calendar): number;
    // private matchDayPeriodString(text: string, start: number, data: string[], dataLength: number, dayPeriod: Output<DayPeriodRules$DayPeriod>): number;
    // private matchLiteral(text: string, pos: number, items: Object[], itemIndex: number, complete: (Object | null)[]): number;
    matchQuarterString(text: string, start: number, field: number, data: string[], cal: Calendar): number;
    // private matchString(text: string, start: number, field: number, data: string[], monthPattern: string, cal: Calendar): number;
    matchString(text: string, start: number, field: number, data: string[], cal: Calendar): number;
    parse(text: string, cal: Calendar, parsePos: ParsePosition): void;
    // private parseAmbiguousDatesAsAfter(startDate: Date): void;
    // private parseInt(text: string, pos: ParsePosition, allowNegative: boolean, fmt: NumberFormat): Number;
    // private parseInt(text: string, maxDigits: number, pos: ParsePosition, allowNegative: boolean, fmt: NumberFormat): Number;
    // private parsePattern(): void;
    patternCharToDateFormatField(ch: string): DateFormat$Field;
    // private processOverrideString(loc: ULocale, str: string): void;
    // private readObject(stream: ObjectInputStream): void;
    // private regionMatchesWithOptionalDot(text: string, start: number, data: string, length: number): number;
    set2DigitYearStart(startDate: Date): void;
    setContext(context: DisplayContext): void;
    setDateFormatSymbols(newFormatSymbols: DateFormatSymbols): void;
    setNumberFormat(fields: string, overrideNF: NumberFormat): void;
    setNumberFormat(newNumberFormat: NumberFormat): void;
    setTimeZoneFormat(tzfmt: TimeZoneFormat): void;
    subFormat(buf: StringBuffer, ch: string, count: number, beginOffset: number, fieldNum: number, capitalizationContext: DisplayContext, pos: FieldPosition, patternCharToOutput: string, cal: Calendar): void;
    subFormat(ch: string, count: number, beginOffset: number, pos: FieldPosition, fmtData: DateFormatSymbols, cal: Calendar): string;
    subFormat(ch: string, count: number, beginOffset: number, fieldNum: number, capitalizationContext: DisplayContext, pos: FieldPosition, patternCharToOutput: string, cal: Calendar): string;
    subParse(text: string, start: number, ch: string, count: number, obeyCount: boolean, allowNegative: boolean, ambiguousYear: (Object | null)[], cal: Calendar): number;
    // private subParse(text: string, start: number, ch: string, count: number, obeyCount: boolean, allowNegative: boolean, ambiguousYear: (Object | null)[], cal: Calendar, numericLeapMonthFormatter: MessageFormat, tzTimeType: Output<TimeZoneFormat$TimeType>): number;
    // private subParse(text: string, start: number, ch: string, count: number, obeyCount: boolean, allowNegative: boolean, ambiguousYear: (Object | null)[], cal: Calendar, numericLeapMonthFormatter: MessageFormat, tzTimeType: Output<TimeZoneFormat$TimeType>, dayPeriod: Output<DayPeriodRules$DayPeriod>): number;
    toLocalizedPattern(): string;
    toPattern(): string;
    // private translatePattern(pat: string, from: string, to: string): string;
    // private tzFormat(): TimeZoneFormat;
    // private writeObject(stream: ObjectOutputStream): void;
    zeroPaddingNumber(value: number, minDigits: number, maxDigits: number): string;
    zeroPaddingNumber(nf: NumberFormat, buf: StringBuffer, value: number, minDigits: number, maxDigits: number): void;
}