import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
export class StringSetParserOperation$TrieNode extends Object {
    constructor(children: Pair<string, StringSetParserOperation$TrieNode>[], isTerminal: boolean)
    readonly children: Pair<string, StringSetParserOperation$TrieNode>[];
    // private isTerminal: boolean;
    /*not mapped: */ isTerminal(): boolean;
}