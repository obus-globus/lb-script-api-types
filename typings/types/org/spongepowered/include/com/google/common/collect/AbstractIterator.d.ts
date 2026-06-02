import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractIterator$State } from '../../../../../../../org/spongepowered/include/com/google/common/collect/AbstractIterator$State.d.ts'
import type { UnmodifiableIterator } from '../../../../../../../org/spongepowered/include/com/google/common/collect/UnmodifiableIterator.d.ts'
export abstract class AbstractIterator<T extends Object | number | string | boolean> extends UnmodifiableIterator<T> {
    constructor()
    // private next: T;
    // private state: AbstractIterator$State;
    computeNext(): T;
    endOfData(): T;
    hasNext(): boolean;
    next(): T;
    // private tryToComputeNext(): boolean;
}