import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { DateTimeFormatterBuilder$DateTimePrinterParser } from '../../../java/time/format/DateTimeFormatterBuilder$DateTimePrinterParser.d.ts'
import type { DateTimeParseContext } from '../../../java/time/format/DateTimeParseContext.d.ts'
import type { DateTimePrintContext } from '../../../java/time/format/DateTimePrintContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class DateTimeFormatterBuilder$CompositePrinterParser extends Object implements DateTimeFormatterBuilder$DateTimePrinterParser {
    private constructor(arg0: DateTimeFormatterBuilder$DateTimePrinterParser[], arg1: boolean)
    private constructor(arg0: DateTimeFormatterBuilder$DateTimePrinterParser[], arg1: boolean)
    // private optional: boolean;
    // private printerParsers: DateTimeFormatterBuilder$DateTimePrinterParser[];
    format(arg0: DateTimePrintContext, arg1: StringBuilder): boolean;
    parse(arg0: DateTimeParseContext, arg1: CharSequence, arg2: number): number;
    toString(): string;
    withOptional(arg0: boolean): DateTimeFormatterBuilder$CompositePrinterParser;
}