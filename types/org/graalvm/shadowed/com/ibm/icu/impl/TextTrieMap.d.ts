import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { TextTrieMap$CharIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TextTrieMap$CharIterator.d.ts'
import type { TextTrieMap$Node } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TextTrieMap$Node.d.ts'
import type { TextTrieMap$Output } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TextTrieMap$Output.d.ts'
import type { TextTrieMap$ResultHandler } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TextTrieMap$ResultHandler.d.ts'
export class TextTrieMap<V extends Object | number | string | boolean> extends Object {
    constructor(ignoreCase: boolean)
    // private _ignoreCase: boolean;
    // private _root: TextTrieMap$Node;
    find(text: CharSequence, offset: number, handler: TextTrieMap$ResultHandler<V>): void;
    // private find(text: CharSequence, offset: number, handler: TextTrieMap$ResultHandler<V>, output: TextTrieMap$Output): void;
    find(text: CharSequence, handler: TextTrieMap$ResultHandler<V>): void;
    // private find(node: TextTrieMap$Node, chitr: TextTrieMap$CharIterator, handler: TextTrieMap$ResultHandler<V>, output: TextTrieMap$Output): void;
    get(text: CharSequence, start: number): Iterator<V>;
    get(text: CharSequence, start: number, output: TextTrieMap$Output): Iterator<V>;
    get(text: string): Iterator<V>;
    put(text: CharSequence, val: V): TextTrieMap<V>;
    putLeadCodePoints(output: string[]): void;
}