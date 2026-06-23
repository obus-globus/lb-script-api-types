import type { DirectedGraphConnections$NodeConnection } from '../../../../com/google/common/graph/DirectedGraphConnections$NodeConnection.d.ts'
import type { GraphConnections } from '../../../../com/google/common/graph/GraphConnections.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class DirectedGraphConnections<N extends unknown, V extends unknown> extends Object implements GraphConnections<N, V> {
    private constructor(adjacentNodeValues: Map<N, Object>, orderedNodeConnections: DirectedGraphConnections$NodeConnection<N>[], predecessorCount: number, successorCount: number)
    // private adjacentNodeValues: Map<N, Object>;
    // private orderedNodeConnections: DirectedGraphConnections$NodeConnection<N>[];
    // private predecessorCount: number;
    // private successorCount: number;
    addPredecessor(node: N, unused: V): void;
    addSuccessor(node: N, value: V): V;
    adjacentNodes(): N[];
    incidentEdgeIterator(thisNode: N): Iterator<N[]>;
    predecessors(): N[];
    removePredecessor(node: N): void;
    removeSuccessor(node: Object): V;
    successors(): N[];
    value(node: N): V;
}