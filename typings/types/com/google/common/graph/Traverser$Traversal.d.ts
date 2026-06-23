import type { SuccessorsFunction } from '../../../../com/google/common/graph/SuccessorsFunction.d.ts'
import type { Traverser$InsertionOrder } from '../../../../com/google/common/graph/Traverser$InsertionOrder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class Traverser$Traversal<N extends unknown> extends Object {
    constructor(successorFunction: SuccessorsFunction<N>)
    // private successorFunction: SuccessorsFunction<N>;
    breadthFirst(startNodes: Iterator<N>): Iterator<N>;
    postOrder(startNodes: Iterator<N>): Iterator<N>;
    preOrder(startNodes: Iterator<N>): Iterator<N>;
    // private topDown(startNodes: Iterator<N>, order: Traverser$InsertionOrder): Iterator<N>;
    visitNext(horizon: Iterator<N>[]): N;
}