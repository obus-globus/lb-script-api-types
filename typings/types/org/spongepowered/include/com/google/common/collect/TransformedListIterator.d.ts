import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../../../../java/util/ListIterator.d.ts'
import type { TransformedIterator } from '../../../../../../../org/spongepowered/include/com/google/common/collect/TransformedIterator.d.ts'
export abstract class TransformedListIterator<F extends unknown, T extends unknown> extends TransformedIterator<F, T> implements ListIterator<T> {
    constructor(arg0: ListIterator<F>)
    add(arg0: T): void;
    // private backingIterator(): ListIterator<F>;
    hasPrevious(): boolean;
    nextIndex(): number;
    previous(): T;
    previousIndex(): number;
    set(arg0: T): void;
}