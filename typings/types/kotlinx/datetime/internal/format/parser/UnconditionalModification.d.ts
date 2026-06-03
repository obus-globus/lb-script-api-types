import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { ParseResult } from '../../../../../kotlinx/datetime/internal/format/parser/ParseResult.d.ts'
import type { ParserOperation } from '../../../../../kotlinx/datetime/internal/format/parser/ParserOperation.d.ts'
export class UnconditionalModification<Output extends Object | number | string | boolean> extends Object implements ParserOperation<Output> {
    constructor(operation: (param0: Output) => void)
    // private operation: (param0: Output) => void;
    consume(storage: Output, input: CharSequence, startIndex: number): ParseResult;
}