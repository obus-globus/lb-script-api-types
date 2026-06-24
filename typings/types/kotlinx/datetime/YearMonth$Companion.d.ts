import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Month } from '../../kotlinx/datetime/Month.d.ts'
import type { YearMonth } from '../../kotlinx/datetime/YearMonth.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithYearMonth } from '../../kotlinx/datetime/format/DateTimeFormatBuilder$WithYearMonth.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
export class YearMonth$Companion extends Object {
    // private serialVersionUID: number;
    Format(block: (param0: DateTimeFormatBuilder$WithYearMonth) => void): DateTimeFormat<YearMonth>;
    orNull(year: number, month: number): YearMonth | null;
    orNull(year: number, month: Month): YearMonth | null;
    parse(input: CharSequence, format: DateTimeFormat<YearMonth>): YearMonth;
    serializer(): KSerializer<YearMonth>;
}