import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { NumberConsumer } from '../../../../../kotlinx/datetime/internal/format/parser/NumberConsumer.d.ts'
import type { ParseResult } from '../../../../../kotlinx/datetime/internal/format/parser/ParseResult.d.ts'
import type { ParserOperation } from '../../../../../kotlinx/datetime/internal/format/parser/ParserOperation.d.ts'
export class NumberSpanParserOperation<Output extends Object | number | string | boolean> extends Object implements ParserOperation<Output> {
    constructor(consumers: NumberConsumer<Output>[])
    readonly consumers: NumberConsumer<Output>[];
    // private isFlexible: boolean;
    // private minLength: number;
    // private /*not mapped: */ getWhatThisExpects(): string;
    consume(storage: Output, input: CharSequence, startIndex: number): ParseResult;
    toString(): string;
}