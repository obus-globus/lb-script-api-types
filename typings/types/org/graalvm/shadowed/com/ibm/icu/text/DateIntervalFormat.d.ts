import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Temporal } from '../../../../../../../java/time/temporal/Temporal.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { ICUCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUCache.d.ts'
import type { DateFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormat.d.ts'
import type { DateIntervalFormat$FormatOutput } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateIntervalFormat$FormatOutput.d.ts'
import type { DateIntervalFormat$FormattedDateInterval } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateIntervalFormat$FormattedDateInterval.d.ts'
import type { DateIntervalFormat$SkeletonAndItsBestMatch } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateIntervalFormat$SkeletonAndItsBestMatch.d.ts'
import type { DateIntervalInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateIntervalInfo.d.ts'
import type { DateIntervalInfo$PatternInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateIntervalInfo$PatternInfo.d.ts'
import type { DateTimePatternGenerator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateTimePatternGenerator.d.ts'
import type { DisplayContext } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayContext.d.ts'
import type { DisplayContext$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayContext$Type.d.ts'
import type { SimpleDateFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SimpleDateFormat.d.ts'
import type { UFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UFormat.d.ts'
import type { Calendar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar.d.ts'
import type { DateInterval } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/DateInterval.d.ts'
import type { Output } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Output.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class DateIntervalFormat extends UFormat implements Cloneable {
    static getInstance(paramskeleton: string): DateIntervalFormat;
    static getInstance(paramskeleton: string, paramlocale: Locale): DateIntervalFormat;
    static getInstance(paramskeleton: string, paramlocale: Locale, paramdtitvinf: DateIntervalInfo): DateIntervalFormat;
    static getInstance(paramskeleton: string, paramdtitvinf: DateIntervalInfo): DateIntervalFormat;
    static getInstance(paramskeleton: string, paramlocale: ULocale): DateIntervalFormat;
    static getInstance(paramskeleton: string, paramlocale: ULocale, paramdtitvinf: DateIntervalInfo): DateIntervalFormat;
    constructor(skeleton: string, dtItvInfo: DateIntervalInfo, simpleDateFormat: SimpleDateFormat)
    // private fCapitalizationSetting: DisplayContext;
    // private fDateFormat: SimpleDateFormat;
    // private fDatePattern: string;
    // private fDateTimeFormat: string;
    // private fFromCalendar: Calendar;
    // private fInfo: DateIntervalInfo;
    // private fIntervalPatterns: { [key: string]: DateIntervalInfo$PatternInfo };
    // private fSkeleton: string;
    // private fTimePattern: string;
    // private fToCalendar: Calendar;
    // private isDateIntervalInfoDefault: boolean;
    clone(): DateIntervalFormat;
    // private concatSingleDate2TimeInterval(dtfmt: string, datePattern: string, field: number, intervalPatterns: { [key: string]: DateIntervalInfo$PatternInfo }): void;
    // private fallbackFormat(fromCalendar: Calendar, toCalendar: Calendar, fromToOnSameDay: boolean, appendTo: StringBuffer, pos: FieldPosition, output: DateIntervalFormat$FormatOutput, attributes: FieldPosition[]): StringBuffer;
    // private fallbackFormat(fromCalendar: Calendar, toCalendar: Calendar, fromToOnSameDay: boolean, appendTo: StringBuffer, pos: FieldPosition, output: DateIntervalFormat$FormatOutput, attributes: FieldPosition[], fullPattern: string): StringBuffer;
    // private fallbackFormatRange(fromCalendar: Calendar, toCalendar: Calendar, appendTo: StringBuffer, patternSB: StringBuilder, pos: FieldPosition, output: DateIntervalFormat$FormatOutput, attributes: FieldPosition[]): void;
    format(fromTemporal: Temporal, toTemporal: Temporal, appendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(arg0: Object): string;
    format(obj: Object, appendTo: StringBuffer, fieldPosition: FieldPosition): StringBuffer;
    format(fromCalendar: Calendar, toCalendar: Calendar, appendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(dtInterval: DateInterval, appendTo: StringBuffer, fieldPosition: FieldPosition): StringBuffer;
    // private formatImpl(fromCalendar: Calendar, toCalendar: Calendar, appendTo: StringBuffer, pos: FieldPosition, output: DateIntervalFormat$FormatOutput, attributes: FieldPosition[]): StringBuffer;
    // private formatIntervalImpl(dtInterval: DateInterval, appendTo: StringBuffer, pos: FieldPosition, output: DateIntervalFormat$FormatOutput, attributes: FieldPosition[]): StringBuffer;
    formatToValue(fromTemporal: Temporal, toTemporal: Temporal): DateIntervalFormat$FormattedDateInterval;
    formatToValue(fromCalendar: Calendar, toCalendar: Calendar): DateIntervalFormat$FormattedDateInterval;
    formatToValue(dtInterval: DateInterval): DateIntervalFormat$FormattedDateInterval;
    // private genFallbackPattern(field: number, skeleton: string, intervalPatterns: { [key: string]: DateIntervalInfo$PatternInfo }, dtpng: DateTimePatternGenerator): void;
    // private genIntervalPattern(field: number, skeleton: string, bestSkeleton: string, differenceInfo: number, intervalPatterns: { [key: string]: DateIntervalInfo$PatternInfo }): DateIntervalFormat$SkeletonAndItsBestMatch;
    // private genSeparateDateTimePtn(dateSkeleton: string, timeSkeleton: string, intervalPatterns: { [key: string]: DateIntervalInfo$PatternInfo }, dtpng: DateTimePatternGenerator): boolean;
    // private getConcatenationPattern(locale: ULocale): string;
    getContext(type: DisplayContext$Type): DisplayContext;
    getDateFormat(): DateFormat;
    getDateIntervalInfo(): DateIntervalInfo;
    getPatterns(fromCalendar: Calendar, toCalendar: Calendar, part2: Output<string>): string;
    getRawPatterns(): { [key: string]: DateIntervalInfo$PatternInfo };
    getTimeZone(): TimeZone;
    // private initializeIntervalPattern(fullPattern: string, locale: ULocale): { [key: string]: DateIntervalInfo$PatternInfo };
    // private initializePattern(cache: ICUCache<string, { [key: string]: DateIntervalInfo$PatternInfo }>): void;
    // private normalizeHourMetacharacters(skeleton: string, locale: ULocale): string;
    parseObject(arg0: string): Object;
    parseObject(source: string, parse_pos: ParsePosition): Object;
    // private readObject(stream: ObjectInputStream): void;
    setContext(context: DisplayContext): void;
    setDateIntervalInfo(newItvPattern: DateIntervalInfo): void;
    setTimeZone(zone: TimeZone): void;
}