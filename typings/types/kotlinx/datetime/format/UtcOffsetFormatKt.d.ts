import type { Object } from '../../../java/lang/Object.d.ts'
import type { DateTimeFormatBuilder } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder.d.ts'
import type { DateTimeFormatBuilder$WithUtcOffset } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithUtcOffset.d.ts'
import type { UtcOffsetFormat } from '../../../kotlinx/datetime/format/UtcOffsetFormat.d.ts'
import type { WhenToOutput } from '../../../kotlinx/datetime/format/WhenToOutput.d.ts'
export class UtcOffsetFormatKt extends Object {
    static getFOUR_DIGIT_OFFSET(): UtcOffsetFormat;
    static getISO_OFFSET(): UtcOffsetFormat;
    static getISO_OFFSET_BASIC(): UtcOffsetFormat;
    static isoOffset(self: DateTimeFormatBuilder$WithUtcOffset, zOnZero: boolean, useSeparator: boolean, outputMinute: WhenToOutput, outputSecond: WhenToOutput): void;
    static outputIfNeeded<T extends DateTimeFormatBuilder>(self: T, whenToOutput: WhenToOutput, format: (param0: T) => void): void;
}