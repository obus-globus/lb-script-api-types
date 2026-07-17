import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { NetworkConnections } from '../../../../com/google/common/graph/NetworkConnections.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractDirectedNetworkConnections<N extends unknown, E extends unknown> extends Object implements NetworkConnections<N, E> {
    constructor(inEdgeMap: JavaMap<E, N>, outEdgeMap: JavaMap<E, N>, selfLoopCount: number)
    // private inEdgeMap: JavaMap<E, N>;
    // private outEdgeMap: JavaMap<E, N>;
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