import type { Count } from '../../../../com/google/common/collect/Count.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class AbstractMapBasedMultiset$MapBasedMultisetIterator extends Object implements Iterator<E> {
    constructor(null_: AbstractMapBasedMultiset$MapBasedMultisetIterator)
    // private canRemove: boolean;
    // private currentEntry: Map$Entry<E, Count>;
    // private entryIterator: Iterator<Map$Entry<E, Count>>;
    // private occurrencesLeft: number;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next<E extends Object | number | string | boolean>(): E;
    remove(): void;
}