import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { DateTimeParseContext } from '../../../java/time/format/DateTimeParseContext.d.ts'
import type { DateTimePrintContext } from '../../../java/time/format/DateTimePrintContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export interface DateTimeFormatterBuilder$DateTimePrinterParser extends Object{
    format(arg0: DateTimePrintContext, arg1: StringBuilder): boolean;
    parse(arg0: DateTimeParseContext, arg1: CharSequence, arg2: number): number;
}