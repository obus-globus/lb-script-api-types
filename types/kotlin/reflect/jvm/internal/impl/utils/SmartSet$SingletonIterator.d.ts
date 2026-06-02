import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
import type { KMutableIterator } from '../../../../../../kotlin/jvm/internal/markers/KMutableIterator.d.ts'
export class SmartSet$SingletonIterator<T extends Object | number | string | boolean> extends Object implements Iterator<T>, KMutableIterator {
    constructor(arg0: T)
    // private element: T;
    // private hasNext: boolean;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    remove(): void;
}