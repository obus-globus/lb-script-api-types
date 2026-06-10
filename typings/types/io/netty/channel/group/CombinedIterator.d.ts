import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class CombinedIterator<E extends Object | number | string | boolean> extends Object implements Iterator<E> {
    constructor(arg0: Iterator<E>, arg1: Iterator<E>)
    // private currentIterator: Iterator<E>;
    // private i1: Iterator<E>;
    // private i2: Iterator<E>;
    forEachRemaining(arg0: (param0: E) => void): void;
    hasNext(): boolean;
    next(): E;
    remove(): void;
}