import type { Object } from '../../java/lang/Object.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
import type { DateTimeUnit$DayBased } from '../../kotlinx/datetime/DateTimeUnit$DayBased.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
export class LocalDateRangeKt extends Object {
    static downTo(self: LocalDate, that: LocalDate): (Object | null)[];
    static first(self: (Object | null)[]): LocalDate;
    static firstOrNull(self: (Object | null)[]): LocalDate | null;
    static last(self: (Object | null)[]): LocalDate;
    static lastOrNull(self: (Object | null)[]): LocalDate | null;
    static random(self: (Object | null)[], random: Random): LocalDate;
    static randomOrNull(self: (Object | null)[], random: Random): LocalDate | null;
    static reversed(self: (Object | null)[]): (Object | null)[];
    static step(self: (Object | null)[], value: number, unit: DateTimeUnit$DayBased): (Object | null)[];
}