import type { UtcOffset } from '../../../kotlinx/datetime/UtcOffset.d.ts'
import type { AbstractDateTimeFormat } from '../../../kotlinx/datetime/format/AbstractDateTimeFormat.d.ts'
import type { DateTimeFormat$Companion } from '../../../kotlinx/datetime/format/DateTimeFormat$Companion.d.ts'
import type { IncompleteUtcOffset } from '../../../kotlinx/datetime/format/IncompleteUtcOffset.d.ts'
import type { UtcOffsetFieldContainer } from '../../../kotlinx/datetime/format/UtcOffsetFieldContainer.d.ts'
import type { UtcOffsetFormat$Companion } from '../../../kotlinx/datetime/format/UtcOffsetFormat$Companion.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
export class UtcOffsetFormat extends AbstractDateTimeFormat<UtcOffset, IncompleteUtcOffset> {
    static Companion: DateTimeFormat$Companion;
    static Companion: UtcOffsetFormat$Companion;
    constructor(actualFormat: CachedFormatStructure<UtcOffsetFieldContainer>)
    readonly actualFormat: CachedFormatStructure<UtcOffsetFieldContainer>;
    readonly emptyIntermediate: IncompleteUtcOffset;
    intermediateFromValue(value: UtcOffset): IncompleteUtcOffset;
    valueFromIntermediate(intermediate: IncompleteUtcOffset): UtcOffset;
}