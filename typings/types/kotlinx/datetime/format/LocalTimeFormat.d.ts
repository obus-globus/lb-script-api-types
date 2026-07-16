import type { LocalTime } from '../../../kotlinx/datetime/LocalTime.d.ts'
import type { AbstractDateTimeFormat } from '../../../kotlinx/datetime/format/AbstractDateTimeFormat.d.ts'
import type { IncompleteLocalTime } from '../../../kotlinx/datetime/format/IncompleteLocalTime.d.ts'
import type { LocalTimeFormat$Companion } from '../../../kotlinx/datetime/format/LocalTimeFormat$Companion.d.ts'
import type { TimeFieldContainer } from '../../../kotlinx/datetime/format/TimeFieldContainer.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
export class LocalTimeFormat extends AbstractDateTimeFormat<LocalTime, IncompleteLocalTime> {
    static Companion: LocalTimeFormat$Companion;
    constructor(actualFormat: CachedFormatStructure<TimeFieldContainer>)
    readonly actualFormat: CachedFormatStructure<TimeFieldContainer>;
    readonly emptyIntermediate: IncompleteLocalTime;
    intermediateFromValue(value: LocalTime): IncompleteLocalTime;
    valueFromIntermediate(intermediate: IncompleteLocalTime): LocalTime;
}