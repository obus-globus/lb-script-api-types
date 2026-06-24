import type { TreeTraverser } from '../../../../com/google/common/collect/TreeTraverser.d.ts'
import type { UnmodifiableIterator } from '../../../../com/google/common/collect/UnmodifiableIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class TreeTraverser$PreOrderIterator extends UnmodifiableIterator<T> {
    constructor(null_: TreeTraverser<T>, root: T)
    // private stack: Iterator<T>[];
    hasNext(): boolean;
    next<T extends unknown>(): T;
}