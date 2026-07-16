import type { Object } from '../../java/lang/Object.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
import type { DateTimeUnit$MonthBased } from '../../kotlinx/datetime/DateTimeUnit$MonthBased.d.ts'
import type { YearMonth } from '../../kotlinx/datetime/YearMonth.d.ts'
export class YearMonthRangeKt extends Object {
    static downTo(self: YearMonth, that: YearMonth): (Object | null)[];
    static first(self: (Object | null)[]): YearMonth;
    static firstOrNull(self: (Object | null)[]): YearMonth | null;
    static last(self: (Object | null)[]): YearMonth;
    static lastOrNull(self: (Object | null)[]): YearMonth | null;
    static random(self: (Object | null)[], random: Random): YearMonth;
    static randomOrNull(self: (Object | null)[], random: Random): YearMonth | null;
    static reversed(self: (Object | null)[]): (Object | null)[];
    static step(self: (Object | null)[], value: number, unit: DateTimeUnit$MonthBased): (Object | null)[];
}