import type { AbstractDateTimeFormat } from '../../../kotlinx/datetime/format/AbstractDateTimeFormat.d.ts'
import type { DateTimeComponents } from '../../../kotlinx/datetime/format/DateTimeComponents.d.ts'
import type { DateTimeComponentsContents } from '../../../kotlinx/datetime/format/DateTimeComponentsContents.d.ts'
import type { DateTimeFormat$Companion } from '../../../kotlinx/datetime/format/DateTimeFormat$Companion.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
export class DateTimeComponentsFormat extends AbstractDateTimeFormat<DateTimeComponents, DateTimeComponentsContents> {
    static Companion: DateTimeFormat$Companion;
    constructor(actualFormat: CachedFormatStructure<DateTimeComponentsContents>)
    readonly actualFormat: CachedFormatStructure<DateTimeComponentsContents>;
    readonly emptyIntermediate: DateTimeComponentsContents;
    intermediateFromValue(value: DateTimeComponents): DateTimeComponentsContents;
    valueFromIntermediate(intermediate: DateTimeComponentsContents): DateTimeComponents;
}