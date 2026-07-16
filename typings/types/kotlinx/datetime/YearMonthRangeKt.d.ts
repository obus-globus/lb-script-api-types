import type { Object } from '../../java/lang/Object.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
import type { DateTimeUnit$MonthBased } from '../../kotlinx/datetime/DateTimeUnit$MonthBased.d.ts'
import type { YearMonth } from '../../kotlinx/datetime/YearMonth.d.ts'
export class YearMonthRangeKt extends Object {
    static downTo(paramarg0: YearMonth, paramarg1: YearMonth): (Object | null)[];
    static first(paramarg0: (Object | null)[]): YearMonth;
    static firstOrNull(paramarg0: (Object | null)[]): YearMonth;
    static last(paramarg0: (Object | null)[]): YearMonth;
    static lastOrNull(paramarg0: (Object | null)[]): YearMonth;
    static random(paramarg0: (Object | null)[], paramarg1: Random): YearMonth;
    static randomOrNull(paramarg0: (Object | null)[], paramarg1: Random): YearMonth;
    static reversed(paramarg0: (Object | null)[]): (Object | null)[];
    static step(paramarg0: (Object | null)[], paramarg1: number, paramarg2: DateTimeUnit$MonthBased): (Object | null)[];
}