import type { AbstractNetwork } from '../../../../com/google/common/graph/AbstractNetwork.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { Network } from '../../../../com/google/common/graph/Network.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ForwardingNetwork<N extends Object | number | string | boolean, E extends Object | number | string | boolean> extends AbstractNetwork<N, E> {
    constructor()
    adjacentEdges(edge: E): E[];
    adjacentNodes(node: N): N[];
    allowsParallelEdges(): boolean;
    allowsSelfLoops(): boolean;
    degree(node: N): number;
    delegate(): Network<N, E>;
    edgeConnecting(nodeU: N, nodeV: N): Optional<E>;
    edgeConnecting(endpoints: N[]): Optional<E>;
    edgeConnectingOrNull(nodeU: N, nodeV: N): E;
    edgeConnectingOrNull(endpoints: N[]): E;
    edgeOrder(): ElementOrder<E>;
    edges(): E[];
    edgesConnecting(nodeU: N, nodeV: N): E[];
    edgesConnecting(endpoints: N[]): E[];
    hasEdgeConnecting(nodeU: N, nodeV: N): boolean;
    hasEdgeConnecting(endpoints: N[]): boolean;
    inDegree(node: N): number;
    inEdges(node: N): E[];
    incidentEdges(node: N): E[];
    incidentNodes(edge: E): N[];
    isDirected(): boolean;
    nodeOrder(): ElementOrder<N>;
    nodes(): N[];
    outDegree(node: N): number;
    outEdges(node: N): E[];
    predecessors(node: N): N[];
    successors(node: N): N[];
}