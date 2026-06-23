import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { ParseResult } from '../../../../../kotlinx/datetime/internal/format/parser/ParseResult.d.ts'
export interface ParserOperation<Output extends unknown> extends Object{
    consume(storage: Output, input: CharSequence, startIndex: number): ParseResult;
}