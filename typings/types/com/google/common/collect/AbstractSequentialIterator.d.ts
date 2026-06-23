import type { UnmodifiableIterator } from '../../../../com/google/common/collect/UnmodifiableIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractSequentialIterator<T extends unknown> extends UnmodifiableIterator<T> {
    constructor(firstOrNull: T)
    // private nextOrNull: T;
    computeNext(previous: T): T;
    hasNext(): boolean;
    next(): T;
}