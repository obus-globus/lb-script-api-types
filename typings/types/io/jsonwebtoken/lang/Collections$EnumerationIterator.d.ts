import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class Collections$EnumerationIterator<E extends unknown> extends Object implements Iterator<E> {
    constructor(arg0: Enumeration<E>)
    // private enumeration: Enumeration<E>;
    forEachRemaining(arg0: (param0: E) => void): void;
    hasNext(): boolean;
    next(): E;
    remove(): void;
}