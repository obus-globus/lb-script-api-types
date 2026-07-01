import type { PeekingIterator } from '../../../../com/google/common/collect/PeekingIterator.d.ts'
import type { TreeTraverser } from '../../../../com/google/common/collect/TreeTraverser.d.ts'
import type { UnmodifiableIterator } from '../../../../com/google/common/collect/UnmodifiableIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TreeTraverser$BreadthFirstIterator extends UnmodifiableIterator<T> implements PeekingIterator<T> {
    constructor(null_: TreeTraverser<Object>, root: Object)
    // private queue: T[];
    hasNext(): boolean;
    next<T extends unknown>(): T;
    peek<T extends unknown>(): T;
}