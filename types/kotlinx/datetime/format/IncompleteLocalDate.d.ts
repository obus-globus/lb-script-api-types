import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalDate } from '../../../kotlinx/datetime/LocalDate.d.ts'
import type { DateFieldContainer } from '../../../kotlinx/datetime/format/DateFieldContainer.d.ts'
import type { IncompleteYearMonth } from '../../../kotlinx/datetime/format/IncompleteYearMonth.d.ts'
import type { YearMonthFieldContainer } from '../../../kotlinx/datetime/format/YearMonthFieldContainer.d.ts'
import type { Copyable } from '../../../kotlinx/datetime/internal/format/parser/Copyable.d.ts'
export class IncompleteLocalDate extends Object implements DateFieldContainer, YearMonthFieldContainer, Copyable<IncompleteLocalDate> {
    constructor(yearMonth: IncompleteYearMonth, day: number | null, dayOfWeek: number | null, dayOfYear: number | null)
    day: number | null;
    dayOfWeek: number | null;
    dayOfYear: number | null;
    monthNumber: number | null;
    year: number | null;
    readonly yearMonth: IncompleteYearMonth;
    copy(): IncompleteLocalDate;
    equals(other: Object | null): boolean;
    hashCode(): number;
    populateFrom(date: LocalDate): void;
    toLocalDate(): LocalDate;
    toString(): string;
}