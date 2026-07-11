import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalDateTime } from '../../../kotlinx/datetime/LocalDateTime.d.ts'
import type { AbstractDateTimeFormatBuilder } from '../../../kotlinx/datetime/format/AbstractDateTimeFormatBuilder.d.ts'
import type { AbstractWithDateTimeBuilder } from '../../../kotlinx/datetime/format/AbstractWithDateTimeBuilder.d.ts'
import type { DateFieldContainer } from '../../../kotlinx/datetime/format/DateFieldContainer.d.ts'
import type { DateTimeFieldContainer } from '../../../kotlinx/datetime/format/DateTimeFieldContainer.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { TimeFieldContainer } from '../../../kotlinx/datetime/format/TimeFieldContainer.d.ts'
import type { AppendableFormatStructure } from '../../../kotlinx/datetime/internal/format/AppendableFormatStructure.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
import type { FormatStructure } from '../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
export class LocalDateTimeFormat$Builder extends Object implements AbstractDateTimeFormatBuilder<DateTimeFieldContainer, LocalDateTimeFormat$Builder>, AbstractWithDateTimeBuilder {
    constructor(actualBuilder: AppendableFormatStructure<DateTimeFieldContainer>)
    readonly actualBuilder: AppendableFormatStructure<DateTimeFieldContainer>;
    addFormatStructureForDate(structure: FormatStructure<DateFieldContainer>): void;
    addFormatStructureForDateTime(structure: FormatStructure<DateTimeFieldContainer>): void;
    addFormatStructureForTime(structure: FormatStructure<TimeFieldContainer>): void;
    appendAlternativeParsingImpl(...otherFormats: (param0: LocalDateTimeFormat$Builder) => void[], mainFormat: (param0: LocalDateTimeFormat$Builder) => void): void;
    appendOptionalImpl(onZero: string, format: (param0: LocalDateTimeFormat$Builder) => void): void;
    build(): CachedFormatStructure<DateTimeFieldContainer>;
    chars(value: string): void;
    createEmpty(): LocalDateTimeFormat$Builder;
    dateTime(format: DateTimeFormat<LocalDateTime>): void;
}