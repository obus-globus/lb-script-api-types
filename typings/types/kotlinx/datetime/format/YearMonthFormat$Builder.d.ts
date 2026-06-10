import type { Object } from '../../../java/lang/Object.d.ts'
import type { YearMonth } from '../../../kotlinx/datetime/YearMonth.d.ts'
import type { AbstractDateTimeFormatBuilder } from '../../../kotlinx/datetime/format/AbstractDateTimeFormatBuilder.d.ts'
import type { AbstractWithYearMonthBuilder } from '../../../kotlinx/datetime/format/AbstractWithYearMonthBuilder.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { MonthNames } from '../../../kotlinx/datetime/format/MonthNames.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
import type { YearMonthFieldContainer } from '../../../kotlinx/datetime/format/YearMonthFieldContainer.d.ts'
import type { AppendableFormatStructure } from '../../../kotlinx/datetime/internal/format/AppendableFormatStructure.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
import type { FormatStructure } from '../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
export class YearMonthFormat$Builder extends Object implements AbstractDateTimeFormatBuilder<YearMonthFieldContainer, YearMonthFormat$Builder>, AbstractWithYearMonthBuilder {
    constructor(actualBuilder: AppendableFormatStructure<YearMonthFieldContainer>)
    readonly actualBuilder: AppendableFormatStructure<YearMonthFieldContainer>;
    addFormatStructureForYearMonth(structure: FormatStructure<YearMonthFieldContainer>): void;
    appendAlternativeParsingImpl(otherFormats: (param0: YearMonthFormat$Builder) => void[], mainFormat: (param0: YearMonthFormat$Builder) => void): void;
    appendOptionalImpl(onZero: string, format: (param0: YearMonthFormat$Builder) => void): void;
    build(): CachedFormatStructure<YearMonthFieldContainer>;
    chars(value: string): void;
    createEmpty(): YearMonthFormat$Builder;
    monthName(names: MonthNames): void;
    monthNumber(padding: Padding): void;
    year(padding: Padding): void;
    yearMonth(format: DateTimeFormat<YearMonth>): void;
    yearTwoDigits(baseYear: number): void;
}