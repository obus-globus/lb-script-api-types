import type { Object } from '../../../java/lang/Object.d.ts'
import type { YearMonth } from '../../../kotlinx/datetime/YearMonth.d.ts'
import type { YearMonthFieldContainer } from '../../../kotlinx/datetime/format/YearMonthFieldContainer.d.ts'
import type { Copyable } from '../../../kotlinx/datetime/internal/format/parser/Copyable.d.ts'
export class IncompleteYearMonth extends Object implements YearMonthFieldContainer, Copyable<IncompleteYearMonth> {
    constructor(year: number | null, monthNumber: number | null)
    monthNumber: number | null;
    year: number | null;
    copy(): IncompleteYearMonth;
    equals(other: Object | null): boolean;
    hashCode(): number;
    populateFrom(yearMonth: YearMonth): void;
    toString(): string;
    toYearMonth(): YearMonth;
}