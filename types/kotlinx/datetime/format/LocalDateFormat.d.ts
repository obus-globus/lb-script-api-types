import type { LocalDate } from '../../../kotlinx/datetime/LocalDate.d.ts'
import type { AbstractDateTimeFormat } from '../../../kotlinx/datetime/format/AbstractDateTimeFormat.d.ts'
import type { DateFieldContainer } from '../../../kotlinx/datetime/format/DateFieldContainer.d.ts'
import type { DateTimeFormat$Companion } from '../../../kotlinx/datetime/format/DateTimeFormat$Companion.d.ts'
import type { IncompleteLocalDate } from '../../../kotlinx/datetime/format/IncompleteLocalDate.d.ts'
import type { LocalDateFormat$Companion } from '../../../kotlinx/datetime/format/LocalDateFormat$Companion.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
export class LocalDateFormat extends AbstractDateTimeFormat<LocalDate, IncompleteLocalDate> {
    static Companion: DateTimeFormat$Companion;
    static Companion: LocalDateFormat$Companion;
    constructor(actualFormat: CachedFormatStructure<DateFieldContainer>)
    readonly actualFormat: CachedFormatStructure<DateFieldContainer>;
    readonly emptyIntermediate: IncompleteLocalDate;
    intermediateFromValue(value: LocalDate): IncompleteLocalDate;
    valueFromIntermediate(intermediate: IncompleteLocalDate): LocalDate;
}