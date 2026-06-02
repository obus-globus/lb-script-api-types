import type { AbstractUndirectedNetworkConnections } from '../../../../com/google/common/graph/AbstractUndirectedNetworkConnections.d.ts'
import type { Reference } from '../../../../java/lang/ref/Reference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UndirectedMultiNetworkConnections<N extends Object | number | string | boolean, E extends Object | number | string | boolean> extends AbstractUndirectedNetworkConnections<N, E> {
    private constructor(incidentEdges: Map<E, N>)
    // private adjacentNodesReference: Reference<N[]>;
    addInEdge(edge: E, node: N, isSelfLoop: boolean): void;
    addOutEdge(edge: E, node: N): void;
    adjacentNodes(): N[];
    // private adjacentNodesMultiset(): N[];
    edgesConnecting(node: N): E[];
    removeInEdge(edge: E, isSelfLoop: boolean): N;
    removeOutEdge(edge: E): N;
}