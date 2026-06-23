import type { UnmodifiableIterator } from '../../../../com/google/common/collect/UnmodifiableIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Iterators$SingletonIterator<T extends unknown> extends UnmodifiableIterator<T> {
    constructor(value: T)
    // private done: boolean;
    // private value: T;
    hasNext(): boolean;
    next(): T;
}