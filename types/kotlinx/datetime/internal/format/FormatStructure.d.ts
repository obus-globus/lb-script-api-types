import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FormatterStructure } from '../../../../kotlinx/datetime/internal/format/formatter/FormatterStructure.d.ts'
import type { ParserStructure } from '../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export interface FormatStructure<T extends Object | number | string | boolean> extends Object{
    formatter(): FormatterStructure<T>;
    parser(): ParserStructure<T>;
}