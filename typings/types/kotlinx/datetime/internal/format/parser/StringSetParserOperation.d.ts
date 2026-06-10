import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { AssignableField } from '../../../../../kotlinx/datetime/internal/format/parser/AssignableField.d.ts'
import type { ParseResult } from '../../../../../kotlinx/datetime/internal/format/parser/ParseResult.d.ts'
import type { ParserOperation } from '../../../../../kotlinx/datetime/internal/format/parser/ParserOperation.d.ts'
import type { StringSetParserOperation$TrieNode } from '../../../../../kotlinx/datetime/internal/format/parser/StringSetParserOperation$TrieNode.d.ts'
export class StringSetParserOperation<Output extends Object | number | string | boolean> extends Object implements ParserOperation<Output> {
    constructor(strings: string[], setter: AssignableField<Output, string>, whatThisExpects: string)
    // private setter: AssignableField<Output, string>;
    // private trie: StringSetParserOperation$TrieNode;
    // private whatThisExpects: string;
    consume(storage: Output, input: CharSequence, startIndex: number): ParseResult;
}