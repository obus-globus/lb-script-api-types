import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { Trie2$CharSequenceValues } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Trie2$CharSequenceValues.d.ts'
export class Trie2$CharSequenceIterator extends Object implements Iterator<Trie2$CharSequenceValues> {
    constructor(null_: Trie2$CharSequenceIterator, t: CharSequence, index: number)
    // private fResults: Trie2$CharSequenceValues;
    // private index: number;
    // private text: CharSequence;
    // private textLength: number;
    forEachRemaining(arg0: (param0: Trie2$CharSequenceValues) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): Trie2$CharSequenceValues;
    previous(): Trie2$CharSequenceValues;
    remove(): void;
    set(i: number): void;
}