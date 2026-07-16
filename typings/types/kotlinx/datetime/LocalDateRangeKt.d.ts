import type { Object } from '../../java/lang/Object.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
import type { DateTimeUnit$DayBased } from '../../kotlinx/datetime/DateTimeUnit$DayBased.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
export class LocalDateRangeKt extends Object {
    static downTo(paramarg0: LocalDate, paramarg1: LocalDate): (Object | null)[];
    static first(paramarg0: (Object | null)[]): LocalDate;
    static firstOrNull(paramarg0: (Object | null)[]): LocalDate;
    static last(paramarg0: (Object | null)[]): LocalDate;
    static lastOrNull(paramarg0: (Object | null)[]): LocalDate;
    static random(paramarg0: (Object | null)[], paramarg1: Random): LocalDate;
    static randomOrNull(paramarg0: (Object | null)[], paramarg1: Random): LocalDate;
    static reversed(paramarg0: (Object | null)[]): (Object | null)[];
    static step(paramarg0: (Object | null)[], paramarg1: number, paramarg2: DateTimeUnit$DayBased): (Object | null)[];
}