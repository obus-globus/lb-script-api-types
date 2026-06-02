import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FormatStructure } from '../../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
import type { NonConcatenatedFormatStructure } from '../../../../kotlinx/datetime/internal/format/NonConcatenatedFormatStructure.d.ts'
import type { FormatterStructure } from '../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
import type { ParserStructure } from '../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export class ConcatenatedFormatStructure<T extends Object | number | string | boolean> extends Object implements FormatStructure<T> {
    constructor(formats: NonConcatenatedFormatStructure<T>[])
    readonly formats: NonConcatenatedFormatStructure<T>[];
    equals(other: Object | null): boolean;
    formatter(): FormatterStructure<T>;
    hashCode(): number;
    parser(): ParserStructure<T>;
    toString(): string;
}