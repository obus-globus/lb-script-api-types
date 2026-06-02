import type { TextTrieMap$CharIterator } from '../../../../com/ibm/icu/impl/TextTrieMap$CharIterator.d.ts'
import type { TextTrieMap$Output } from '../../../../com/ibm/icu/impl/TextTrieMap$Output.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class TextTrieMap$Node extends Object {
    private constructor(null_: TextTrieMap$Node)
    private constructor(null_: TextTrieMap$Node, arg2: V[], arg3: TextTrieMap$Node[])
    // private _children: TextTrieMap$Node[];
    // private _text: string[];
    // private _values: V[];
    add<V extends Object | number | string | boolean>(arg0: TextTrieMap$CharIterator, arg1: V): void;
    // private add<V extends Object | number | string | boolean>(arg0: string[], arg1: number, arg2: V): void;
    // private addValue<V extends Object | number | string | boolean>(arg0: V[], arg1: V): V[];
    charCount(): number;
    findMatch(arg0: TextTrieMap$CharIterator, arg1: TextTrieMap$Output): TextTrieMap$Node;
    // private lenMatches(arg0: string[], arg1: number): number;
    // private matchFollowing(arg0: TextTrieMap$CharIterator, arg1: TextTrieMap$Output): boolean;
    putLeadCodePoints(arg0: string[]): void;
    // private split(arg0: number): void;
    values(): Iterator<V>;
}