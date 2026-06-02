import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export abstract class AbstractIterator<T extends Object | number | string | boolean> extends Object implements Iterator<T> {
    constructor()
    // private nextValue: T | null;
    // private state: number;
    protected computeNext(): void;
    protected done(): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    protected setNext(value: T): void;
    // private tryToComputeNext(): boolean;
}