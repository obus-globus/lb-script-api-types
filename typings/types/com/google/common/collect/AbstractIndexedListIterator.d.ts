import type { UnmodifiableListIterator } from '../../../../com/google/common/collect/UnmodifiableListIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractIndexedListIterator<E extends Object | number | string | boolean> extends UnmodifiableListIterator<E> {
    constructor(size: number)
    constructor(size: number, position: number)
    // private position: number;
    // private size: number;
    get(index: number): E;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): E;
    nextIndex(): number;
    previous(): E;
    previousIndex(): number;
}