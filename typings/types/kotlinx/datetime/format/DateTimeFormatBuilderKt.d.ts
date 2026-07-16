import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { DateTimeFormatBuilder } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder.d.ts'
import type { DateTimeFormatBuilder$WithTime } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithTime.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
import type { FormatStructure } from '../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
export class DateTimeFormatBuilderKt extends Object {
    static alternativeParsing<T extends DateTimeFormatBuilder>(self: T, alternativeFormats: (param0: T) => void[], primaryFormat: (param0: T) => void): void;
    static builderString<T extends unknown>(self: FormatStructure<T>, constants: Pair<string, CachedFormatStructure<Object>>[]): string;
    static char(self: DateTimeFormatBuilder, value: string): void;
    static optional<T extends DateTimeFormatBuilder>(self: T, ifZero: string, format: (param0: T) => void): void;
    static secondFractionInternal(self: DateTimeFormatBuilder$WithTime, minLength: number, maxLength: number, grouping: number[]): void;
}