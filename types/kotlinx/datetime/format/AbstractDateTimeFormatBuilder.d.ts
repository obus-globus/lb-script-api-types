import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { DateTimeFormatBuilder } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder.d.ts'
import type { AppendableFormatStructure } from '../../../kotlinx/datetime/internal/format/AppendableFormatStructure.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
export interface AbstractDateTimeFormatBuilder<Target extends Object | number | string | boolean, ActualSelf extends AbstractDateTimeFormatBuilder<Target, ActualSelf>> extends Object, DateTimeFormatBuilder{
    readonly actualBuilder: AppendableFormatStructure<Target>;
    appendAlternativeParsingImpl(otherFormats: Function1<ActualSelf, void>[], mainFormat: Function1<ActualSelf, void>): void;
    appendOptionalImpl(onZero: string, format: Function1<ActualSelf, void>): void;
    build(): CachedFormatStructure<Target>;
    chars(value: string): void;
    createEmpty(): ActualSelf;
}