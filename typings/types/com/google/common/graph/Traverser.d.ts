import type { SuccessorsFunction } from '../../../../com/google/common/graph/SuccessorsFunction.d.ts'
import type { Traverser$Traversal } from '../../../../com/google/common/graph/Traverser$Traversal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Traverser<N extends unknown> extends Object {
    static forGraph(paramgraph: SuccessorsFunction<Object>): Traverser<Object>;
    static forTree(paramtree: SuccessorsFunction<Object>): Traverser<Object>;
    private constructor(successorFunction: SuccessorsFunction<N>)
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