import type { TransformedIterator } from '../../../../com/google/common/collect/TransformedIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../java/util/ListIterator.d.ts'
export abstract class TransformedListIterator<F extends unknown, T extends unknown> extends TransformedIterator<F, T> implements ListIterator<T> {
    constructor(backingIterator: ListIterator<F>)
    add(element: T): void;
    // private backingIterator(): ListIterator<F>;
    hasPrevious(): boolean;
    nextIndex(): number;
    previous(): T;
    previousIndex(): number;
    set(element: T): void;
}