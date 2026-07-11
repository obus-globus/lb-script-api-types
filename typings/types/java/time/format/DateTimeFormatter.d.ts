import type { Appendable } from '../../../java/lang/Appendable.d.ts'
import type { RuntimeException } from '../../../java/lang/RuntimeException.d.ts'
import type { Format } from '../../../java/text/Format.d.ts'
import type { ParsePosition } from '../../../java/text/ParsePosition.d.ts'
import type { Period } from '../../../java/time/Period.d.ts'
import type { ZoneId } from '../../../java/time/ZoneId.d.ts'
import type { Chronology } from '../../../java/time/chrono/Chronology.d.ts'
import type { DateTimeFormatterBuilder$CompositePrinterParser } from '../../../java/time/format/DateTimeFormatterBuilder$CompositePrinterParser.d.ts'
import type { DateTimeParseContext } from '../../../java/time/format/DateTimeParseContext.d.ts'
import type { DateTimeParseException } from '../../../java/time/format/DateTimeParseException.d.ts'
import type { DecimalStyle } from '../../../java/time/format/DecimalStyle.d.ts'
import type { FormatStyle } from '../../../java/time/format/FormatStyle.d.ts'
import type { ResolverStyle } from '../../../java/time/format/ResolverStyle.d.ts'
import type { TemporalAccessor } from '../../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalField } from '../../../java/time/temporal/TemporalField.d.ts'
import type { TemporalQuery } from '../../../java/time/temporal/TemporalQuery.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class DateTimeFormatter extends Object {
    static BASIC_ISO_DATE: DateTimeFormatter;
    static ISO_DATE: DateTimeFormatter;
    static ISO_DATE_TIME: DateTimeFormatter;
    static ISO_INSTANT: DateTimeFormatter;
    static ISO_LOCAL_DATE: DateTimeFormatter;
    static ISO_LOCAL_DATE_TIME: DateTimeFormatter;
    static ISO_LOCAL_TIME: DateTimeFormatter;
    static ISO_OFFSET_DATE: DateTimeFormatter;
    static ISO_OFFSET_DATE_TIME: DateTimeFormatter;
    static ISO_OFFSET_TIME: DateTimeFormatter;
    static ISO_ORDINAL_DATE: DateTimeFormatter;
    static ISO_TIME: DateTimeFormatter;
    static ISO_WEEK_DATE: DateTimeFormatter;
    static ISO_ZONED_DATE_TIME: DateTimeFormatter;
    static RFC_1123_DATE_TIME: DateTimeFormatter;
    static ofLocalizedDate(paramarg0: FormatStyle): DateTimeFormatter;
    static ofLocalizedDateTime(paramarg0: FormatStyle): DateTimeFormatter;
    static ofLocalizedDateTime(paramarg0: FormatStyle, paramarg1: FormatStyle): DateTimeFormatter;
    static ofLocalizedPattern(paramarg0: string): DateTimeFormatter;
    static ofLocalizedTime(paramarg0: FormatStyle): DateTimeFormatter;
    static ofPattern(paramarg0: string): DateTimeFormatter;
    static ofPattern(paramarg0: string, paramarg1: Locale): DateTimeFormatter;
    static parsedExcessDays(): (param0: TemporalAccessor) => Period;
    static parsedLeapSecond(): (param0: TemporalAccessor) => boolean;
    constructor(arg0: DateTimeFormatterBuilder$CompositePrinterParser, arg1: Locale, arg2: DecimalStyle, arg3: ResolverStyle, arg4: TemporalField[], arg5: Chronology, arg6: ZoneId)
    // private chrono: Chronology;
    readonly decimalStyle: DecimalStyle;
    readonly locale: Locale;
    // private printerParser: DateTimeFormatterBuilder$CompositePrinterParser;
    readonly resolverFields: TemporalField[];
    readonly resolverStyle: ResolverStyle;
    readonly zone: ZoneId;
    // private createError(arg0: CharSequence, arg1: RuntimeException): DateTimeParseException;
    format(arg0: TemporalAccessor): string;
    formatTo(arg0: TemporalAccessor, arg1: Appendable): void;
    getChronology(): Chronology;
    getDecimalStyle(): DecimalStyle;
    getLocale(): Locale;
    getResolverFields(): TemporalField[];
    getResolverStyle(): ResolverStyle;
    getZone(): ZoneId;
    localizedBy(arg0: Locale): DateTimeFormatter;
    parse(arg0: CharSequence): TemporalAccessor;
    parse(arg0: CharSequence, arg1: ParsePosition): TemporalAccessor;
    parse<T extends unknown>(arg0: CharSequence, arg1: (param0: TemporalAccessor) => T): T;
    parseBest(arg0: CharSequence, ...arg1: (param0: TemporalAccessor) => Object | null[]): TemporalAccessor;
    // private parseResolved0(arg0: CharSequence, arg1: ParsePosition): TemporalAccessor;
    parseUnresolved(arg0: CharSequence, arg1: ParsePosition): TemporalAccessor;
    // private parseUnresolved0(arg0: CharSequence, arg1: ParsePosition): DateTimeParseContext;
    toFormat(): Format;
    toFormat(arg0: (param0: TemporalAccessor) => Object | null): Format;
    toPrinterParser(arg0: boolean): DateTimeFormatterBuilder$CompositePrinterParser;
    toString(): string;
    withChronology(arg0: Chronology): DateTimeFormatter;
    withDecimalStyle(arg0: DecimalStyle): DateTimeFormatter;
    withLocale(arg0: Locale): DateTimeFormatter;
    withResolverFields(...arg0: TemporalField[]): DateTimeFormatter;
    withResolverFields(arg0: TemporalField[]): DateTimeFormatter;
    withResolverStyle(arg0: ResolverStyle): DateTimeFormatter;
    withZone(arg0: ZoneId): DateTimeFormatter;
}