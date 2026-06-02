import type { ZoneId } from '../../../java/time/ZoneId.d.ts'
import type { Chronology } from '../../../java/time/chrono/Chronology.d.ts'
import type { DateTimeFormatter } from '../../../java/time/format/DateTimeFormatter.d.ts'
import type { DateTimeFormatterBuilder$DayPeriod } from '../../../java/time/format/DateTimeFormatterBuilder$DayPeriod.d.ts'
import type { DecimalStyle } from '../../../java/time/format/DecimalStyle.d.ts'
import type { Parsed } from '../../../java/time/format/Parsed.d.ts'
import type { ResolverStyle } from '../../../java/time/format/ResolverStyle.d.ts'
import type { TemporalAccessor } from '../../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalField } from '../../../java/time/temporal/TemporalField.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class DateTimeParseContext extends Object {
    constructor(arg0: DateTimeFormatter)
    // private caseSensitive: boolean;
    // private chronoListeners: (param0: Chronology) => void[];
    // private formatter: DateTimeFormatter;
    // private parsed: Parsed[];
    // private strict: boolean;
    addChronoChangedListener(arg0: (param0: Chronology) => void): void;
    charEquals(arg0: string, arg1: string): boolean;
    copy(): DateTimeParseContext;
    // private currentParsed(): Parsed;
    endOptional(arg0: boolean): void;
    getDecimalStyle(): DecimalStyle;
    getEffectiveChronology(): Chronology;
    getLocale(): Locale;
    getParsed(arg0: TemporalField): number;
    isCaseSensitive(): boolean;
    isStrict(): boolean;
    setCaseSensitive(arg0: boolean): void;
    setParsed(arg0: ZoneId): void;
    setParsed(arg0: Chronology): void;
    setParsedDayPeriod(arg0: DateTimeFormatterBuilder$DayPeriod): void;
    setParsedField(arg0: TemporalField, arg1: number, arg2: number, arg3: number): number;
    setParsedLeapSecond(): void;
    setParsedZoneNameType(arg0: number): void;
    setStrict(arg0: boolean): void;
    startOptional(): void;
    subSequenceEquals(arg0: CharSequence, arg1: number, arg2: CharSequence, arg3: number, arg4: number): boolean;
    toResolved(arg0: ResolverStyle, arg1: TemporalField[]): TemporalAccessor;
    toString(): string;
    toUnresolved(): Parsed;
}