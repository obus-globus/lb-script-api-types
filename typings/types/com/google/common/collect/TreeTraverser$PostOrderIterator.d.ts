import type { AbstractIterator } from '../../../../com/google/common/collect/AbstractIterator.d.ts'
import type { TreeTraverser$PostOrderNode } from '../../../../com/google/common/collect/TreeTraverser$PostOrderNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TreeTraverser$PostOrderIterator extends AbstractIterator<T> {
    constructor(null_: TreeTraverser$PostOrderIterator)
    // private stack: TreeTraverser$PostOrderNode<T>[];
    computeNext<T extends Object | number | string | boolean>(): T;
    // private expand<T extends Object | number | string | boolean>(t: T): TreeTraverser$PostOrderNode<T>;
}