import type { Object } from '../../../../java/lang/Object.d.ts'
export interface NetworkConnections<N extends Object | number | string | boolean, E extends Object | number | string | boolean> extends Object{
    addInEdge(edge: E, node: N, isSelfLoop: boolean): void;
    addOutEdge(edge: E, node: N): void;
    adjacentNode(edge: E): N;
    adjacentNodes(): N[];
    edgesConnecting(node: N): E[];
    inEdges(): E[];
    incidentEdges(): E[];
    outEdges(): E[];
    predecessors(): N[];
    removeInEdge(edge: E, isSelfLoop: boolean): N;
    removeOutEdge(edge: E): N;
    successors(): N[];
}