import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { LocalDateTime } from '../../../kotlinx/datetime/LocalDateTime.d.ts'
import type { UtcOffset } from '../../../kotlinx/datetime/UtcOffset.d.ts'
import type { AbstractDateTimeFormatBuilder } from '../../../kotlinx/datetime/format/AbstractDateTimeFormatBuilder.d.ts'
import type { AbstractWithDateTimeBuilder } from '../../../kotlinx/datetime/format/AbstractWithDateTimeBuilder.d.ts'
import type { AbstractWithOffsetBuilder } from '../../../kotlinx/datetime/format/AbstractWithOffsetBuilder.d.ts'
import type { DateFieldContainer } from '../../../kotlinx/datetime/format/DateFieldContainer.d.ts'
import type { DateTimeComponents } from '../../../kotlinx/datetime/format/DateTimeComponents.d.ts'
import type { DateTimeComponentsContents } from '../../../kotlinx/datetime/format/DateTimeComponentsContents.d.ts'
import type { DateTimeFieldContainer } from '../../../kotlinx/datetime/format/DateTimeFieldContainer.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithDateTimeComponents } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithDateTimeComponents.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
import type { TimeFieldContainer } from '../../../kotlinx/datetime/format/TimeFieldContainer.d.ts'
import type { UtcOffsetFieldContainer } from '../../../kotlinx/datetime/format/UtcOffsetFieldContainer.d.ts'
import type { AppendableFormatStructure } from '../../../kotlinx/datetime/internal/format/AppendableFormatStructure.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
import type { FormatStructure } from '../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
export class DateTimeComponentsFormat$Builder extends Object implements AbstractDateTimeFormatBuilder<DateTimeComponentsContents, DateTimeComponentsFormat$Builder>, AbstractWithDateTimeBuilder, AbstractWithOffsetBuilder, DateTimeFormatBuilder$WithDateTimeComponents {
    constructor(actualBuilder: AppendableFormatStructure<DateTimeComponentsContents>)
    readonly actualBuilder: AppendableFormatStructure<DateTimeComponentsContents>;
    addFormatStructureForDate(structure: FormatStructure<DateFieldContainer>): void;
    addFormatStructureForDateTime(structure: FormatStructure<DateTimeFieldContainer>): void;
    addFormatStructureForOffset(structure: FormatStructure<UtcOffsetFieldContainer>): void;
    addFormatStructureForTime(structure: FormatStructure<TimeFieldContainer>): void;
    appendAlternativeParsingImpl(otherFormats: Function1<ActualSelf, void>[], mainFormat: Function1<ActualSelf, void>): void;
    appendOptionalImpl(onZero: string, format: Function1<ActualSelf, void>): void;
    build(): CachedFormatStructure<Target>;
    chars(value: string): void;
    createEmpty(): DateTimeComponentsFormat$Builder;
    dateTime(format: DateTimeFormat<LocalDateTime>): void;
    dateTimeComponents(format: DateTimeFormat<DateTimeComponents>): void;
    offset(format: DateTimeFormat<UtcOffset>): void;
    offsetHours(padding: Padding): void;
    offsetMinutesOfHour(padding: Padding): void;
    offsetSecondsOfMinute(padding: Padding): void;
    timeZoneId(): void;
}