import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { NetworkConnections } from '../../../../com/google/common/graph/NetworkConnections.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractUndirectedNetworkConnections<N extends unknown, E extends unknown> extends Object implements NetworkConnections<N, E> {
    constructor(incidentEdgeMap: JavaMap<E, N>)
    // private incidentEdgeMap: JavaMap<E, N>;
    addInEdge(edge: E, node: N, isSelfLoop: boolean): void;
    addOutEdge(edge: E, node: N): void;
    adjacentNode(edge: E): N;
    inEdges(): E[];
    incidentEdges(): E[];
    outEdges(): E[];
    predecessors(): N[];
    removeInEdge(edge: E, isSelfLoop: boolean): N;
    removeOutEdge(edge: E): N;
    successors(): N[];
}