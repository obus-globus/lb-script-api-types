import type { Consumer } from '../../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../../../java/util/Iterator.d.ts'
export class ConcurrentCircularUnpaddedArrayQueue$WeakIterator<E extends Object | number | string | boolean> extends Object implements Iterator<E> {
    constructor(arg0: number, arg1: number, arg2: number, arg3: E[])
    // private buffer: E[];
    // private mask: number;
    // private nextElement: E;
    // private nextIndex: number;
    // private pIndex: number;
    forEachRemaining(arg0: (param0: T) => void): void;
    // private getNext(): E;
    hasNext(): boolean;
    next(): E;
    remove(): void;
}