import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { ParseResult } from '../../../../../kotlinx/datetime/internal/format/parser/ParseResult.d.ts'
import type { ParserOperation } from '../../../../../kotlinx/datetime/internal/format/parser/ParserOperation.d.ts'
export class SignParser<Output extends unknown> extends Object implements ParserOperation<Output> {
    constructor(isNegativeSetter: (param0: Output, param1: boolean) => void, withPlusSign: boolean, whatThisExpects: string)
    // private isNegativeSetter: (param0: Output, param1: boolean) => void;
    // private whatThisExpects: string;
    // private withPlusSign: boolean;
    consume(storage: Output, input: CharSequence, startIndex: number): ParseResult;
    toString(): string;
}