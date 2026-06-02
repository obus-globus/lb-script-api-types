import type { PeekingIterator } from '../../../../com/google/common/collect/PeekingIterator.d.ts'
import type { UnmodifiableIterator } from '../../../../com/google/common/collect/UnmodifiableIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TreeTraverser$BreadthFirstIterator extends UnmodifiableIterator<T> implements PeekingIterator<T> {
    constructor(null_: TreeTraverser$BreadthFirstIterator)
    // private queue: T[];
    hasNext(): boolean;
    next<T extends Object | number | string | boolean>(): T;
    peek<T extends Object | number | string | boolean>(): T;
}