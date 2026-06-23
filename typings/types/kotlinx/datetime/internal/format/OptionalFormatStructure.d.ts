import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FormatStructure } from '../../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
import type { NonConcatenatedFormatStructure } from '../../../../kotlinx/datetime/internal/format/NonConcatenatedFormatStructure.d.ts'
import type { OptionalFormatStructure$PropertyWithDefault } from '../../../../kotlinx/datetime/internal/format/OptionalFormatStructure$PropertyWithDefault.d.ts'
import type { FormatterStructure } from '../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
import type { ParserStructure } from '../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export class OptionalFormatStructure<T extends unknown> extends Object implements NonConcatenatedFormatStructure<T> {
    constructor(onZero: string, format: FormatStructure<T>)
    // private fields: OptionalFormatStructure$PropertyWithDefault<T, Object>[];
    readonly format: FormatStructure<T>;
    readonly onZero: string;
    equals(other: Object | null): boolean;
    formatter(): FormatterStructure<T>;
    hashCode(): number;
    parser(): ParserStructure<T>;
    toString(): string;
}