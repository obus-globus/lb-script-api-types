import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UnmodifiableListIterator } from '../../../../../../../org/spongepowered/include/com/google/common/collect/UnmodifiableListIterator.d.ts'
export abstract class AbstractIndexedListIterator<E extends Object | number | string | boolean> extends UnmodifiableListIterator<E> {
    constructor(arg0: number, arg1: number)
    // private position: number;
    // private size: number;
    get(arg0: number): E;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): E;
    nextIndex(): number;
    previous(): E;
    previousIndex(): number;
}