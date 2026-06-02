import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { YearMonth } from '../../kotlinx/datetime/YearMonth.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithYearMonth } from '../../kotlinx/datetime/format/DateTimeFormatBuilder$WithYearMonth.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
export class YearMonth$Companion extends Object {
    // private serialVersionUID: number;
    Format(block: Function1<DateTimeFormatBuilder$WithYearMonth, void>): DateTimeFormat<YearMonth>;
    parse(input: CharSequence, format: DateTimeFormat<YearMonth>): YearMonth;
    serializer(): KSerializer<YearMonth>;
}