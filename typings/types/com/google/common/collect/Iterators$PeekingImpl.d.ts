import type { PeekingIterator } from '../../../../com/google/common/collect/PeekingIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Iterators$PeekingImpl<E extends Object | number | string | boolean> extends Object implements PeekingIterator<E> {
    constructor(iterator: Iterator<E>)
    // private hasPeeked: boolean;
    // private iterator: Iterator<E>;
    // private peekedElement: E;
    hasNext(): boolean;
    next(): E;
    peek(): E;
    remove(): void;
}