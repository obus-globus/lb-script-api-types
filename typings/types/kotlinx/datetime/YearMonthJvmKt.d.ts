import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { YearMonth } from '../../kotlinx/datetime/YearMonth.d.ts'
import type { YearMonth$Companion } from '../../kotlinx/datetime/YearMonth$Companion.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class YearMonthJvmKt extends Object {
    static fromEpochMonths(self: YearMonth$Companion, months: number): YearMonth;
    static parseOrNull(self: YearMonth$Companion, input: CharSequence, format: DateTimeFormat<YearMonth>): YearMonth | null;
    static toEpochMonths(self: YearMonth): number;
}