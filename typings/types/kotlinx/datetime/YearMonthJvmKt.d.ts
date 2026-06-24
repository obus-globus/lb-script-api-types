import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { YearMonth } from '../../kotlinx/datetime/YearMonth.d.ts'
import type { YearMonth$Companion } from '../../kotlinx/datetime/YearMonth$Companion.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class YearMonthJvmKt extends Object {
    static fromEpochMonths(paramarg0: YearMonth$Companion, paramarg1: number): YearMonth;
    static parseOrNull(paramarg0: YearMonth$Companion, paramarg1: CharSequence, paramarg2: DateTimeFormat<YearMonth>): YearMonth;
    static toEpochMonths(paramarg0: YearMonth): number;
}