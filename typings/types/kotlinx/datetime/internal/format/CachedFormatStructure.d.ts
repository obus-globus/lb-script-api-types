import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ConcatenatedFormatStructure } from '../../../../kotlinx/datetime/internal/format/ConcatenatedFormatStructure.d.ts'
import type { NonConcatenatedFormatStructure } from '../../../../kotlinx/datetime/internal/format/NonConcatenatedFormatStructure.d.ts'
import type { FormatterStructure } from '../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
import type { ParserStructure } from '../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export class CachedFormatStructure<T extends unknown> extends ConcatenatedFormatStructure<T> {
    constructor(formats: NonConcatenatedFormatStructure<T>[])
    // private cachedFormatter: FormatterStructure<T>;
    // private cachedParser: ParserStructure<T>;
    formatter(): FormatterStructure<T>;
    parser(): ParserStructure<T>;
}