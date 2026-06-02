import type { Object } from '../../java/lang/Object.d.ts'
import type { DateTimeUnit$DayBased } from '../../kotlinx/datetime/DateTimeUnit$DayBased.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
export class LocalDateProgression$Companion extends Object {
    fromClosedRange(rangeStart: LocalDate, rangeEnd: LocalDate, stepValue: number, stepUnit: DateTimeUnit$DayBased): (Object | null)[];
}