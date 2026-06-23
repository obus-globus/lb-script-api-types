import type { GraphConnections } from '../../../../com/google/common/graph/GraphConnections.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class UndirectedGraphConnections<N extends unknown, V extends unknown> extends Object implements GraphConnections<N, V> {
    private constructor(adjacentNodeValues: Map<N, V>)
    // private adjacentNodeValues: Map<N, V>;
    addPredecessor(node: N, value: V): void;
    addSuccessor(node: N, value: V): V;
    adjacentNodes(): N[];
    incidentEdgeIterator(thisNode: N): Iterator<N[]>;
    predecessors(): N[];
    removePredecessor(node: N): void;
    removeSuccessor(node: N): V;
    successors(): N[];
    value(node: N): V;
}