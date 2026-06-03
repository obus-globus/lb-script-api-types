import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalDate } from '../../../kotlinx/datetime/LocalDate.d.ts'
import type { AbstractDateTimeFormatBuilder } from '../../../kotlinx/datetime/format/AbstractDateTimeFormatBuilder.d.ts'
import type { AbstractWithDateBuilder } from '../../../kotlinx/datetime/format/AbstractWithDateBuilder.d.ts'
import type { DateFieldContainer } from '../../../kotlinx/datetime/format/DateFieldContainer.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DayOfWeekNames } from '../../../kotlinx/datetime/format/DayOfWeekNames.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
import type { YearMonthFieldContainer } from '../../../kotlinx/datetime/format/YearMonthFieldContainer.d.ts'
import type { AppendableFormatStructure } from '../../../kotlinx/datetime/internal/format/AppendableFormatStructure.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
import type { FormatStructure } from '../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
export class LocalDateFormat$Builder extends Object implements AbstractDateTimeFormatBuilder<DateFieldContainer, LocalDateFormat$Builder>, AbstractWithDateBuilder {
    constructor(actualBuilder: AppendableFormatStructure<DateFieldContainer>)
    readonly actualBuilder: AppendableFormatStructure<DateFieldContainer>;
    addFormatStructureForDate(structure: FormatStructure<DateFieldContainer>): void;
    addFormatStructureForYearMonth(structure: FormatStructure<YearMonthFieldContainer>): void;
    appendAlternativeParsingImpl(otherFormats: (param0: ActualSelf) => void[], mainFormat: (param0: ActualSelf) => void): void;
    appendOptionalImpl(onZero: string, format: (param0: ActualSelf) => void): void;
    build(): CachedFormatStructure<Target>;
    chars(value: string): void;
    createEmpty(): LocalDateFormat$Builder;
    date(format: DateTimeFormat<LocalDate>): void;
    day(padding: Padding): void;
    dayOfWeek(names: DayOfWeekNames): void;
    dayOfYear(padding: Padding): void;
}