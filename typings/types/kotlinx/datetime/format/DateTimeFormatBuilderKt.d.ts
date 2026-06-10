import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { DateTimeFormatBuilder } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder.d.ts'
import type { DateTimeFormatBuilder$WithTime } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithTime.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
import type { FormatStructure } from '../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
export class DateTimeFormatBuilderKt extends Object {
    static alternativeParsing(paramarg0: DateTimeFormatBuilder | null, paramarg1: Object | null, paramarg2: (param0: Object) => void): void;
    static builderString(paramarg0: FormatStructure<Object>, paramarg1: Pair<string, CachedFormatStructure<Object>>[]): string;
    static char(paramarg0: DateTimeFormatBuilder, paramarg1: string): void;
    static optional(paramarg0: DateTimeFormatBuilder | null, paramarg1: string, paramarg2: (param0: Object) => void): void;
    static secondFractionInternal(paramarg0: DateTimeFormatBuilder$WithTime, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
}