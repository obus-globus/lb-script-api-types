import type { Object } from '../../java/lang/Object.d.ts'
import type { DateTimeUnit$MonthBased } from '../../kotlinx/datetime/DateTimeUnit$MonthBased.d.ts'
import type { YearMonth } from '../../kotlinx/datetime/YearMonth.d.ts'
export class YearMonthProgression$Companion extends Object {
    fromClosedRange(rangeStart: YearMonth, rangeEnd: YearMonth, stepValue: number, stepUnit: DateTimeUnit$MonthBased): (Object | null)[];
}