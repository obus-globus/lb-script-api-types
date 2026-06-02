import type { NetworkConnections } from '../../../../com/google/common/graph/NetworkConnections.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractDirectedNetworkConnections<N extends Object | number | string | boolean, E extends Object | number | string | boolean> extends Object implements NetworkConnections<N, E> {
    constructor(inEdgeMap: Map<E, N>, outEdgeMap: Map<E, N>, selfLoopCount: number)
    // private inEdgeMap: Map<E, N>;
    // private outEdgeMap: Map<E, N>;
    // private selfLoopCount: number;
    addInEdge(edge: E, node: N, isSelfLoop: boolean): void;
    addOutEdge(edge: E, node: N): void;
    adjacentNode(edge: E): N;
    adjacentNodes(): N[];
    inEdges(): E[];
    incidentEdges(): E[];
    outEdges(): E[];
    removeInEdge(edge: E, isSelfLoop: boolean): N;
    removeOutEdge(edge: E): N;
}