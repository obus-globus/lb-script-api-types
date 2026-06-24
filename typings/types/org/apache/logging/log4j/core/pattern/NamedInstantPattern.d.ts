import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class NamedInstantPattern extends Enum<NamedInstantPattern> {
    static ABSOLUTE: NamedInstantPattern;
    static ABSOLUTE_MICROS: NamedInstantPattern;
    static ABSOLUTE_NANOS: NamedInstantPattern;
    static ABSOLUTE_PERIOD: NamedInstantPattern;
    static COMPACT: NamedInstantPattern;
    static DATE: NamedInstantPattern;
    static DATE_PERIOD: NamedInstantPattern;
    static DEFAULT: NamedInstantPattern;
    static DEFAULT_MICROS: NamedInstantPattern;
    static DEFAULT_NANOS: NamedInstantPattern;
    static DEFAULT_PERIOD: NamedInstantPattern;
    static ISO8601: NamedInstantPattern;
    static ISO8601_BASIC: NamedInstantPattern;
    static ISO8601_BASIC_PERIOD: NamedInstantPattern;
    static ISO8601_OFFSET_DATE_TIME_HH: NamedInstantPattern;
    static ISO8601_OFFSET_DATE_TIME_HHCMM: NamedInstantPattern;
    static ISO8601_OFFSET_DATE_TIME_HHMM: NamedInstantPattern;
    static ISO8601_PERIOD: NamedInstantPattern;
    static ISO8601_PERIOD_MICROS: NamedInstantPattern;
    static US_MONTH_DAY_YEAR2_TIME: NamedInstantPattern;
    static US_MONTH_DAY_YEAR4_TIME: NamedInstantPattern;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): NamedInstantPattern;
    static values(): (Object | null)[];
    private constructor(pattern: string)
    private constructor(pattern: string, legacyPattern: string)
    // private legacyPattern: string;
    readonly pattern: string;
    getLegacyPattern(): string;
    getPattern(): string;
    name(): "ABSOLUTE" | "ABSOLUTE_MICROS" | "ABSOLUTE_NANOS" | "ABSOLUTE_PERIOD" | "COMPACT" | "DATE" | "DATE_PERIOD" | "DEFAULT" | "DEFAULT_MICROS" | "DEFAULT_NANOS" | "DEFAULT_PERIOD" | "ISO8601_BASIC" | "ISO8601_BASIC_PERIOD" | "ISO8601" | "ISO8601_OFFSET_DATE_TIME_HH" | "ISO8601_OFFSET_DATE_TIME_HHMM" | "ISO8601_OFFSET_DATE_TIME_HHCMM" | "ISO8601_PERIOD" | "ISO8601_PERIOD_MICROS" | "US_MONTH_DAY_YEAR2_TIME" | "US_MONTH_DAY_YEAR4_TIME";
}