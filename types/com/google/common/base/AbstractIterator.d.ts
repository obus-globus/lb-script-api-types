import type { AbstractIterator$State } from '../../../../com/google/common/base/AbstractIterator$State.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class AbstractIterator<T extends Object | number | string | boolean> extends Object implements Iterator<T> {
    constructor()
    // private next: T;
    // private state: AbstractIterator$State;
    computeNext(): T;
    endOfData(): T;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    remove(): void;
    // private tryToComputeNext(): boolean;
}