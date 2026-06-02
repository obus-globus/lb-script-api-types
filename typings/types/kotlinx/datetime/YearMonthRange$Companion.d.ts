import type { Object } from '../../java/lang/Object.d.ts'
import type { YearMonth } from '../../kotlinx/datetime/YearMonth.d.ts'
export class YearMonthRange$Companion extends Object {
    readonly EMPTY: (Object | null)[];
    fromRangeTo(start: YearMonth, endInclusive: YearMonth): (Object | null)[];
    fromRangeUntil(start: YearMonth, endExclusive: YearMonth): (Object | null)[];
}