import type { ICUCache } from '../../../../com/ibm/icu/impl/ICUCache.d.ts'
import type { DateFormat } from '../../../../com/ibm/icu/text/DateFormat.d.ts'
import type { DateIntervalFormat$FormatOutput } from '../../../../com/ibm/icu/text/DateIntervalFormat$FormatOutput.d.ts'
import type { DateIntervalFormat$FormattedDateInterval } from '../../../../com/ibm/icu/text/DateIntervalFormat$FormattedDateInterval.d.ts'
import type { DateIntervalFormat$SkeletonAndItsBestMatch } from '../../../../com/ibm/icu/text/DateIntervalFormat$SkeletonAndItsBestMatch.d.ts'
import type { DateIntervalInfo } from '../../../../com/ibm/icu/text/DateIntervalInfo.d.ts'
import type { DateIntervalInfo$PatternInfo } from '../../../../com/ibm/icu/text/DateIntervalInfo$PatternInfo.d.ts'
import type { DateTimePatternGenerator } from '../../../../com/ibm/icu/text/DateTimePatternGenerator.d.ts'
import type { DisplayContext } from '../../../../com/ibm/icu/text/DisplayContext.d.ts'
import type { DisplayContext$Type } from '../../../../com/ibm/icu/text/DisplayContext$Type.d.ts'
import type { SimpleDateFormat } from '../../../../com/ibm/icu/text/SimpleDateFormat.d.ts'
import type { UFormat } from '../../../../com/ibm/icu/text/UFormat.d.ts'
import type { Calendar } from '../../../../com/ibm/icu/util/Calendar.d.ts'
import type { DateInterval } from '../../../../com/ibm/icu/util/DateInterval.d.ts'
import type { Output } from '../../../../com/ibm/icu/util/Output.d.ts'
import type { TimeZone } from '../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Temporal } from '../../../../java/time/temporal/Temporal.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class DateIntervalFormat extends UFormat implements Cloneable {
    static getInstance(paramarg0: string): DateIntervalFormat;
    static getInstance(paramarg0: string, paramarg1: DateIntervalInfo): DateIntervalFormat;
    static getInstance(paramarg0: string, paramarg1: ULocale): DateIntervalFormat;
    static getInstance(paramarg0: string, paramarg1: ULocale, paramarg2: DateIntervalInfo): DateIntervalFormat;
    static getInstance(paramarg0: string, paramarg1: Locale): DateIntervalFormat;
    static getInstance(paramarg0: string, paramarg1: Locale, paramarg2: DateIntervalInfo): DateIntervalFormat;
    private constructor()
    constructor(arg0: string, arg1: DateIntervalInfo, arg2: SimpleDateFormat)
    private constructor(arg0: string, arg1: ULocale, arg2: SimpleDateFormat)
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
    protected clone(): Object;
    // private concatSingleDate2TimeInterval(arg0: string, arg1: string, arg2: number, arg3: { [key: string]: DateIntervalInfo$PatternInfo }): void;
    // private fallbackFormat(arg0: Calendar, arg1: Calendar, arg2: boolean, arg3: StringBuffer, arg4: FieldPosition, arg5: DateIntervalFormat$FormatOutput, arg6: FieldPosition[]): StringBuffer;
    // private fallbackFormat(arg0: Calendar, arg1: Calendar, arg2: boolean, arg3: StringBuffer, arg4: FieldPosition, arg5: DateIntervalFormat$FormatOutput, arg6: FieldPosition[], arg7: string): StringBuffer;
    // private fallbackFormatRange(arg0: Calendar, arg1: Calendar, arg2: StringBuffer, arg3: StringBuilder, arg4: FieldPosition, arg5: DateIntervalFormat$FormatOutput, arg6: FieldPosition[]): void;
    format(arg0: Calendar, arg1: Calendar, arg2: StringBuffer, arg3: FieldPosition): StringBuffer;
    format(arg0: DateInterval, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Temporal, arg1: Temporal, arg2: StringBuffer, arg3: FieldPosition): StringBuffer;
    format(arg0: Object): string;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    // private formatImpl(arg0: Calendar, arg1: Calendar, arg2: StringBuffer, arg3: FieldPosition, arg4: DateIntervalFormat$FormatOutput, arg5: FieldPosition[]): StringBuffer;
    // private formatIntervalImpl(arg0: DateInterval, arg1: StringBuffer, arg2: FieldPosition, arg3: DateIntervalFormat$FormatOutput, arg4: FieldPosition[]): StringBuffer;
    formatToValue(arg0: Calendar, arg1: Calendar): DateIntervalFormat$FormattedDateInterval;
    formatToValue(arg0: DateInterval): DateIntervalFormat$FormattedDateInterval;
    formatToValue(arg0: Temporal, arg1: Temporal): DateIntervalFormat$FormattedDateInterval;
    // private genFallbackPattern(arg0: number, arg1: string, arg2: { [key: string]: DateIntervalInfo$PatternInfo }, arg3: DateTimePatternGenerator): void;
    // private genIntervalPattern(arg0: number, arg1: string, arg2: string, arg3: number, arg4: { [key: string]: DateIntervalInfo$PatternInfo }): DateIntervalFormat$SkeletonAndItsBestMatch;
    // private genSeparateDateTimePtn(arg0: string, arg1: string, arg2: { [key: string]: DateIntervalInfo$PatternInfo }, arg3: DateTimePatternGenerator): boolean;
    // private getConcatenationPattern(arg0: ULocale): string;
    getContext(arg0: DisplayContext$Type): DisplayContext;
    getDateFormat(): DateFormat;
    getDateIntervalInfo(): DateIntervalInfo;
    getPatterns(arg0: Calendar, arg1: Calendar, arg2: Output<string>): string;
    getRawPatterns(): { [key: string]: DateIntervalInfo$PatternInfo };
    getTimeZone(): TimeZone;
    // private initializeIntervalPattern(arg0: string, arg1: ULocale): { [key: string]: DateIntervalInfo$PatternInfo };
    // private initializePattern(arg0: ICUCache<string, { [key: string]: DateIntervalInfo$PatternInfo }>): void;
    // private normalizeHourMetacharacters(arg0: string, arg1: ULocale): string;
    parseObject(arg0: string): Object;
    parseObject(arg0: string, arg1: ParsePosition): Object;
    // private readObject(arg0: ObjectInputStream): void;
    setContext(arg0: DisplayContext): void;
    setDateIntervalInfo(arg0: DateIntervalInfo): void;
    setTimeZone(arg0: TimeZone): void;
}