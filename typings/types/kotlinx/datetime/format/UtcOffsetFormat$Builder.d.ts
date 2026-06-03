import type { Object } from '../../../java/lang/Object.d.ts'
import type { UtcOffset } from '../../../kotlinx/datetime/UtcOffset.d.ts'
import type { AbstractDateTimeFormatBuilder } from '../../../kotlinx/datetime/format/AbstractDateTimeFormatBuilder.d.ts'
import type { AbstractWithOffsetBuilder } from '../../../kotlinx/datetime/format/AbstractWithOffsetBuilder.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
import type { UtcOffsetFieldContainer } from '../../../kotlinx/datetime/format/UtcOffsetFieldContainer.d.ts'
import type { AppendableFormatStructure } from '../../../kotlinx/datetime/internal/format/AppendableFormatStructure.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
import type { FormatStructure } from '../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
export class UtcOffsetFormat$Builder extends Object implements AbstractDateTimeFormatBuilder<UtcOffsetFieldContainer, UtcOffsetFormat$Builder>, AbstractWithOffsetBuilder {
    constructor(actualBuilder: AppendableFormatStructure<UtcOffsetFieldContainer>)
    readonly actualBuilder: AppendableFormatStructure<UtcOffsetFieldContainer>;
    addFormatStructureForOffset(structure: FormatStructure<UtcOffsetFieldContainer>): void;
    appendAlternativeParsingImpl(otherFormats: (param0: ActualSelf) => void[], mainFormat: (param0: ActualSelf) => void): void;
    appendOptionalImpl(onZero: string, format: (param0: ActualSelf) => void): void;
    build(): CachedFormatStructure<Target>;
    chars(value: string): void;
    createEmpty(): UtcOffsetFormat$Builder;
    offset(format: DateTimeFormat<UtcOffset>): void;
    offsetHours(padding: Padding): void;
    offsetMinutesOfHour(padding: Padding): void;
    offsetSecondsOfMinute(padding: Padding): void;
}