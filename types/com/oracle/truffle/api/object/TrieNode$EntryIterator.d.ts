import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class TrieNode$EntryIterator<E extends Object | number | string | boolean> extends Object implements Iterator<E> {
    constructor(entries: Object[])
    // private entries: Object[];
    // private nestedIterator: TrieNode$EntryIterator<E>;
    // private nextEntry: E;
    // private nextIndex: number;
    // private advance(): E;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): E;
}