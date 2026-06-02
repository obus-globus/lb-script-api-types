import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { LocalTime } from '../../../kotlinx/datetime/LocalTime.d.ts'
import type { AbstractDateTimeFormatBuilder } from '../../../kotlinx/datetime/format/AbstractDateTimeFormatBuilder.d.ts'
import type { AbstractWithTimeBuilder } from '../../../kotlinx/datetime/format/AbstractWithTimeBuilder.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
import type { TimeFieldContainer } from '../../../kotlinx/datetime/format/TimeFieldContainer.d.ts'
import type { AppendableFormatStructure } from '../../../kotlinx/datetime/internal/format/AppendableFormatStructure.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
import type { FormatStructure } from '../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
export class LocalTimeFormat$Builder extends Object implements AbstractDateTimeFormatBuilder<TimeFieldContainer, LocalTimeFormat$Builder>, AbstractWithTimeBuilder {
    constructor(actualBuilder: AppendableFormatStructure<TimeFieldContainer>)
    readonly actualBuilder: AppendableFormatStructure<TimeFieldContainer>;
    addFormatStructureForTime(structure: FormatStructure<TimeFieldContainer>): void;
    amPmHour(padding: Padding): void;
    amPmMarker(am: string, pm: string): void;
    appendAlternativeParsingImpl(otherFormats: Function1<ActualSelf, void>[], mainFormat: Function1<ActualSelf, void>): void;
    appendOptionalImpl(onZero: string, format: Function1<ActualSelf, void>): void;
    build(): CachedFormatStructure<Target>;
    chars(value: string): void;
    createEmpty(): LocalTimeFormat$Builder;
    hour(padding: Padding): void;
    minute(padding: Padding): void;
    second(padding: Padding): void;
    secondFraction(minLength: number, maxLength: number): void;
    time(format: DateTimeFormat<LocalTime>): void;
}