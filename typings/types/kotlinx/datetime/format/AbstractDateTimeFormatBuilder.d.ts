import type { Object } from '../../../java/lang/Object.d.ts'
import type { DateTimeFormatBuilder } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder.d.ts'
import type { AppendableFormatStructure } from '../../../kotlinx/datetime/internal/format/AppendableFormatStructure.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
export interface AbstractDateTimeFormatBuilder<Target extends unknown, ActualSelf extends AbstractDateTimeFormatBuilder<Target, ActualSelf>> extends Object, DateTimeFormatBuilder {
    readonly actualBuilder: AppendableFormatStructure<Target>;
    appendAlternativeParsingImpl(...otherFormats: (param0: ActualSelf) => void[], mainFormat: (param0: ActualSelf) => void): void;
    appendOptionalImpl(onZero: string, format: (param0: ActualSelf) => void): void;
    build(): CachedFormatStructure<Target>;
    chars(value: string): void;
    createEmpty(): ActualSelf;
}