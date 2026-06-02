import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { DateTimeFormatBuilder } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder.d.ts'
import type { DateTimeFormatBuilder$WithTime } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithTime.d.ts'
import type { FormatStructure } from '../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
export class DateTimeFormatBuilderKt extends Object {
    static alternativeParsing(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Function1<Object, void>): void;
    static builderString(paramarg0: FormatStructure<Object>, paramarg1: (Object | null)[]): string;
    static char(paramarg0: DateTimeFormatBuilder, paramarg1: string): void;
    static optional(paramarg0: Object | null, paramarg1: string, paramarg2: Function1<Object, void>): void;
    static secondFractionInternal(paramarg0: DateTimeFormatBuilder$WithTime, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
}