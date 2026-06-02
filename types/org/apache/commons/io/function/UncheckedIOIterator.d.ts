import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { IOIterator } from '../../../../../org/apache/commons/io/function/IOIterator.d.ts'
export class UncheckedIOIterator<E extends Object | number | string | boolean> extends Object implements Iterator<E> {
    constructor(arg0: IOIterator<E>)
    // private delegate: IOIterator<E>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): E;
    remove(): void;
}