import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FormatStructure } from '../../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
import type { NonConcatenatedFormatStructure } from '../../../../kotlinx/datetime/internal/format/NonConcatenatedFormatStructure.d.ts'
import type { FormatterStructure } from '../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
import type { ParserStructure } from '../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export class AlternativesParsingFormatStructure<T extends Object | number | string | boolean> extends Object implements NonConcatenatedFormatStructure<T> {
    constructor(mainFormat: FormatStructure<T>, formats: FormatStructure<T>[])
    readonly formats: FormatStructure<T>[];
    readonly mainFormat: FormatStructure<T>;
    equals(other: Object | null): boolean;
    formatter(): FormatterStructure<T>;
    hashCode(): number;
    parser(): ParserStructure<T>;
    toString(): string;
}