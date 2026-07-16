import type { YearMonth } from '../../../kotlinx/datetime/YearMonth.d.ts'
import type { AbstractDateTimeFormat } from '../../../kotlinx/datetime/format/AbstractDateTimeFormat.d.ts'
import type { IncompleteYearMonth } from '../../../kotlinx/datetime/format/IncompleteYearMonth.d.ts'
import type { YearMonthFieldContainer } from '../../../kotlinx/datetime/format/YearMonthFieldContainer.d.ts'
import type { YearMonthFormat$Companion } from '../../../kotlinx/datetime/format/YearMonthFormat$Companion.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
export class YearMonthFormat extends AbstractDateTimeFormat<YearMonth, IncompleteYearMonth> {
    static Companion: YearMonthFormat$Companion;
    constructor(actualFormat: CachedFormatStructure<YearMonthFieldContainer>)
    readonly actualFormat: CachedFormatStructure<YearMonthFieldContainer>;
    readonly emptyIntermediate: IncompleteYearMonth;
    intermediateFromValue(value: YearMonth): IncompleteYearMonth;
    valueFromIntermediate(intermediate: IncompleteYearMonth): YearMonth;
}