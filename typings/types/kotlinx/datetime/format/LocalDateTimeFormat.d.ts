import type { LocalDateTime } from '../../../kotlinx/datetime/LocalDateTime.d.ts'
import type { AbstractDateTimeFormat } from '../../../kotlinx/datetime/format/AbstractDateTimeFormat.d.ts'
import type { DateTimeFieldContainer } from '../../../kotlinx/datetime/format/DateTimeFieldContainer.d.ts'
import type { DateTimeFormat$Companion } from '../../../kotlinx/datetime/format/DateTimeFormat$Companion.d.ts'
import type { IncompleteLocalDateTime } from '../../../kotlinx/datetime/format/IncompleteLocalDateTime.d.ts'
import type { LocalDateTimeFormat$Companion } from '../../../kotlinx/datetime/format/LocalDateTimeFormat$Companion.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
export class LocalDateTimeFormat extends AbstractDateTimeFormat<LocalDateTime, IncompleteLocalDateTime> {
    static Companion: DateTimeFormat$Companion;
    static Companion: LocalDateTimeFormat$Companion;
    constructor(actualFormat: CachedFormatStructure<DateTimeFieldContainer>)
    readonly actualFormat: CachedFormatStructure<DateTimeFieldContainer>;
    readonly emptyIntermediate: IncompleteLocalDateTime;
    intermediateFromValue(value: LocalDateTime): IncompleteLocalDateTime;
    valueFromIntermediate(intermediate: IncompleteLocalDateTime): LocalDateTime;
}