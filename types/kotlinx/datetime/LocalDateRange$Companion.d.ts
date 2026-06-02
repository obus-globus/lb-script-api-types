import type { Object } from '../../java/lang/Object.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
export class LocalDateRange$Companion extends Object {
    readonly EMPTY: (Object | null)[];
    fromRangeTo(start: LocalDate, endInclusive: LocalDate): (Object | null)[];
    fromRangeUntil(start: LocalDate, endExclusive: LocalDate): (Object | null)[];
}