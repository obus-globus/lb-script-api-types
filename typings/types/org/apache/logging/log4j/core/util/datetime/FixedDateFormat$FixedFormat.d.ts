import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { TimeZone } from '../../../../../../../java/util/TimeZone.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { FastDateFormat } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/FastDateFormat.d.ts'
import type { FixedDateFormat$FixedTimeZoneFormat } from '../../../../../../../org/apache/logging/log4j/core/util/datetime/FixedDateFormat$FixedTimeZoneFormat.d.ts'
export class FixedDateFormat$FixedFormat extends Enum<FixedDateFormat$FixedFormat> {
    static ABSOLUTE: FixedDateFormat$FixedFormat;
    static ABSOLUTE_MICROS: FixedDateFormat$FixedFormat;
    static ABSOLUTE_NANOS: FixedDateFormat$FixedFormat;
    static ABSOLUTE_PERIOD: FixedDateFormat$FixedFormat;
    static COMPACT: FixedDateFormat$FixedFormat;
    static DATE: FixedDateFormat$FixedFormat;
    static DATE_PERIOD: FixedDateFormat$FixedFormat;
    static DEFAULT: FixedDateFormat$FixedFormat;
    static DEFAULT_MICROS: FixedDateFormat$FixedFormat;
    static DEFAULT_NANOS: FixedDateFormat$FixedFormat;
    static DEFAULT_PERIOD: FixedDateFormat$FixedFormat;
    static ISO8601: FixedDateFormat$FixedFormat;
    static ISO8601_BASIC: FixedDateFormat$FixedFormat;
    static ISO8601_BASIC_PERIOD: FixedDateFormat$FixedFormat;
    static ISO8601_OFFSET_DATE_TIME_HH: FixedDateFormat$FixedFormat;
    static ISO8601_OFFSET_DATE_TIME_HHCMM: FixedDateFormat$FixedFormat;
    static ISO8601_OFFSET_DATE_TIME_HHMM: FixedDateFormat$FixedFormat;
    static ISO8601_PERIOD: FixedDateFormat$FixedFormat;
    static ISO8601_PERIOD_MICROS: FixedDateFormat$FixedFormat;
    static US_MONTH_DAY_YEAR2_TIME: FixedDateFormat$FixedFormat;
    static US_MONTH_DAY_YEAR4_TIME: FixedDateFormat$FixedFormat;
    static lookup(paramnameOrPattern: string): FixedDateFormat$FixedFormat;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FixedDateFormat$FixedFormat;
    static values(): FixedDateFormat$FixedFormat[];
    private constructor(pattern: string, datePattern: string, escapeCount: number, timeSeparator: string, timeSepLength: number, millisSeparator: string, millisSepLength: number, secondFractionDigits: number, timeZoneFormat: FixedDateFormat$FixedTimeZoneFormat)
    readonly datePattern: string;
    // private escapeCount: number;
    // private extraTimeZoneFormatLength: number;
    readonly fixedTimeZoneFormat: FixedDateFormat$FixedTimeZoneFormat;
    // private millisSeparatorChar: string;
    // private millisSeparatorLength: number;
    readonly pattern: string;
    readonly secondFractionDigits: number;
    // private timeSeparatorChar: string;
    // private timeSeparatorLength: number;
    getDatePattern(): string;
    getDatePatternLength(): number;
    getFastDateFormat(): FastDateFormat;
    getFastDateFormat(tz: TimeZone): FastDateFormat;
    getFixedTimeZoneFormat(): FixedDateFormat$FixedTimeZoneFormat;
    getLength(): number;
    getPattern(): string;
    getSecondFractionDigits(): number;
    name(): "ABSOLUTE" | "ABSOLUTE_MICROS" | "ABSOLUTE_NANOS" | "ABSOLUTE_PERIOD" | "COMPACT" | "DATE" | "DATE_PERIOD" | "DEFAULT" | "DEFAULT_MICROS" | "DEFAULT_NANOS" | "DEFAULT_PERIOD" | "ISO8601_BASIC" | "ISO8601_BASIC_PERIOD" | "ISO8601" | "ISO8601_OFFSET_DATE_TIME_HH" | "ISO8601_OFFSET_DATE_TIME_HHMM" | "ISO8601_OFFSET_DATE_TIME_HHCMM" | "ISO8601_PERIOD" | "ISO8601_PERIOD_MICROS" | "US_MONTH_DAY_YEAR2_TIME" | "US_MONTH_DAY_YEAR4_TIME";
}