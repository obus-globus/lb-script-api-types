import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { YearMonth } from '../../../kotlinx/datetime/YearMonth.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithYearMonth } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithYearMonth.d.ts'
export class YearMonthFormat$Companion extends Object {
    build(block: Function1<DateTimeFormatBuilder$WithYearMonth, void>): DateTimeFormat<YearMonth>;
}