import type { AbstractIterator$State } from '../../../../com/google/common/collect/AbstractIterator$State.d.ts'
import type { UnmodifiableIterator } from '../../../../com/google/common/collect/UnmodifiableIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractIterator<T extends unknown> extends UnmodifiableIterator<T> {
    constructor()
    // private next: T;
    // private state: AbstractIterator$State;
    computeNext(): T;
    endOfData(): T;
    hasNext(): boolean;
    next(): T;
    peek(): T;
    // private tryToComputeNext(): boolean;
}