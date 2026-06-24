import type { AbstractIterator } from '../../../../com/google/common/collect/AbstractIterator.d.ts'
import type { TreeTraverser } from '../../../../com/google/common/collect/TreeTraverser.d.ts'
import type { TreeTraverser$PostOrderNode } from '../../../../com/google/common/collect/TreeTraverser$PostOrderNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TreeTraverser$PostOrderIterator extends AbstractIterator<T> {
    constructor(null_: TreeTraverser<T>, root: T)
    // private stack: TreeTraverser$PostOrderNode<T>[];
    computeNext<T extends unknown>(): T;
    // private expand<T extends unknown>(t: T): TreeTraverser$PostOrderNode<T>;
}