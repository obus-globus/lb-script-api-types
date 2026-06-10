import type { AtomicReferenceArray } from '../../../../../../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Consumer } from '../../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../../../java/util/Iterator.d.ts'
export class BaseMpscLinkedAtomicArrayQueue$WeakIterator<E extends Object | number | string | boolean> extends Object implements Iterator<E> {
    constructor(arg0: AtomicReferenceArray<E>, arg1: number, arg2: number)
    // private currentBuffer: AtomicReferenceArray<E>;
    // private mask: number;
    // private nextElement: E;
    // private nextIndex: number;
    // private pIndex: number;
    forEachRemaining(arg0: (param0: E) => void): void;
    // private getNext(): E;
    hasNext(): boolean;
    next(): E;
    remove(): void;
    // private setBuffer(arg0: AtomicReferenceArray<E>): void;
}