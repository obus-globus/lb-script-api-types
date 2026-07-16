import type { SuccessorsFunction } from '../../../../com/google/common/graph/SuccessorsFunction.d.ts'
import type { Traverser$Traversal } from '../../../../com/google/common/graph/Traverser$Traversal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Traverser<N extends unknown> extends Object {
    static forGraph<N extends unknown>(paramgraph: SuccessorsFunction<N>): Traverser<N>;
    static forTree<N extends unknown>(paramtree: SuccessorsFunction<N>): Traverser<N>;
    constructor(arg0: SuccessorsFunction<Object>, arg1: Traverser<N>)
    // private successorFunction: SuccessorsFunction<N>;
    breadthFirst(startNode: N): N[];
    breadthFirst(startNodes: N[]): N[];
    depthFirstPostOrder(startNode: N): N[];
    depthFirstPostOrder(startNodes: N[]): N[];
    depthFirstPreOrder(startNode: N): N[];
    depthFirstPreOrder(startNodes: N[]): N[];
    newTraversal(): Traverser$Traversal<N>;
    // private validate(startNodes: N[]): N[];
}