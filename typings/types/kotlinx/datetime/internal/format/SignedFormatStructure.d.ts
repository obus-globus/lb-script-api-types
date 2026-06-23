import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldSign } from '../../../../kotlinx/datetime/internal/format/FieldSign.d.ts'
import type { FormatStructure } from '../../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
import type { NonConcatenatedFormatStructure } from '../../../../kotlinx/datetime/internal/format/NonConcatenatedFormatStructure.d.ts'
import type { FormatterStructure } from '../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
import type { ParserStructure } from '../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export class SignedFormatStructure<T extends unknown> extends Object implements NonConcatenatedFormatStructure<T> {
    constructor(format: FormatStructure<T>, withPlusSign: boolean)
    // private fieldSigns: FieldSign<T>[];
    readonly format: FormatStructure<T>;
    readonly withPlusSign: boolean;
    equals(other: Object | null): boolean;
    formatter(): FormatterStructure<T>;
    hashCode(): number;
    parser(): ParserStructure<T>;
    toString(): string;
}