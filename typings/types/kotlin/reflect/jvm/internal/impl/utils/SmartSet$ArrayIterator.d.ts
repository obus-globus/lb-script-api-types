import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
import type { KMutableIterator } from '../../../../../../kotlin/jvm/internal/markers/KMutableIterator.d.ts'
export class SmartSet$ArrayIterator<T extends unknown> extends Object implements Iterator<T>, KMutableIterator {
    constructor(arg0: T[])
    // private arrayIterator: Iterator<T>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    remove(): void;
}