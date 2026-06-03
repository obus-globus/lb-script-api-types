import type { Object } from '../../../java/lang/Object.d.ts'
import type { YearMonth } from '../../../kotlinx/datetime/YearMonth.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithYearMonth } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithYearMonth.d.ts'
export class YearMonthFormat$Companion extends Object {
    build(block: (param0: DateTimeFormatBuilder$WithYearMonth) => void): DateTimeFormat<YearMonth>;
}