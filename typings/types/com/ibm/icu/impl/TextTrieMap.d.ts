import type { TextTrieMap$CharIterator } from '../../../../com/ibm/icu/impl/TextTrieMap$CharIterator.d.ts'
import type { TextTrieMap$Node } from '../../../../com/ibm/icu/impl/TextTrieMap$Node.d.ts'
import type { TextTrieMap$Output } from '../../../../com/ibm/icu/impl/TextTrieMap$Output.d.ts'
import type { TextTrieMap$ResultHandler } from '../../../../com/ibm/icu/impl/TextTrieMap$ResultHandler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class TextTrieMap<V extends unknown> extends Object {
    constructor(arg0: boolean)
    // private _ignoreCase: boolean;
    // private _root: TextTrieMap$Node;
    // private find(arg0: TextTrieMap$Node, arg1: TextTrieMap$CharIterator, arg2: TextTrieMap$ResultHandler<V>, arg3: TextTrieMap$Output): void;
    find(arg0: CharSequence, arg1: TextTrieMap$ResultHandler<V>): void;
    find(arg0: CharSequence, arg1: number, arg2: TextTrieMap$ResultHandler<V>): void;
    // private find(arg0: CharSequence, arg1: number, arg2: TextTrieMap$ResultHandler<V>, arg3: TextTrieMap$Output): void;
    get(arg0: CharSequence, arg1: number): Iterator<V>;
    get(arg0: CharSequence, arg1: number, arg2: TextTrieMap$Output): Iterator<V>;
    get(arg0: string): Iterator<V>;
    put(arg0: CharSequence, arg1: V): TextTrieMap<V>;
    putLeadCodePoints(arg0: string[]): void;
}