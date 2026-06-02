import type { Multiset$Entry } from '../../../../com/google/common/collect/Multiset$Entry.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Multisets$MultisetIteratorImpl<E extends Object | number | string | boolean> extends Object implements Iterator<E> {
    constructor(multiset: E[], entryIterator: Iterator<Multiset$Entry<E>>)
    // private canRemove: boolean;
    // private currentEntry: Multiset$Entry<E>;
    // private entryIterator: Iterator<Multiset$Entry<E>>;
    // private laterCount: number;
    // private multiset: E[];
    // private totalCount: number;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): E;
    remove(): void;
}