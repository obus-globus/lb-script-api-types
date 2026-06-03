import type { Object } from '../../../java/lang/Object.d.ts'
import type { DateTimeFormatBuilder$WithUtcOffset } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithUtcOffset.d.ts'
import type { UtcOffsetFormat } from '../../../kotlinx/datetime/format/UtcOffsetFormat.d.ts'
import type { WhenToOutput } from '../../../kotlinx/datetime/format/WhenToOutput.d.ts'
export class UtcOffsetFormatKt extends Object {
    static getFOUR_DIGIT_OFFSET(): UtcOffsetFormat;
    static getISO_OFFSET(): UtcOffsetFormat;
    static getISO_OFFSET_BASIC(): UtcOffsetFormat;
    static isoOffset(paramarg0: DateTimeFormatBuilder$WithUtcOffset, paramarg1: boolean, paramarg2: boolean, paramarg3: WhenToOutput, paramarg4: WhenToOutput): void;
    static outputIfNeeded(paramarg0: Object | null, paramarg1: WhenToOutput, paramarg2: (param0: Object | null) => void): void;
}