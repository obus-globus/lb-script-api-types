import type { ForwardingNetwork } from '../../../../com/google/common/graph/ForwardingNetwork.d.ts'
import type { Network } from '../../../../com/google/common/graph/Network.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Graphs$TransposedNetwork<N extends Object | number | string | boolean, E extends Object | number | string | boolean> extends ForwardingNetwork<N, E> {
    constructor(network: Network<N, E>)
    // private network: Network<N, E>;
    delegate(): Network<N, E>;
    edgeConnecting(nodeU: N, nodeV: N): Optional<E>;
    edgeConnecting(endpoints: N[]): Optional<E>;
    edgeConnectingOrNull(nodeU: N, nodeV: N): E;
    edgeConnectingOrNull(endpoints: N[]): E;
    edgesConnecting(nodeU: N, nodeV: N): E[];
    edgesConnecting(endpoints: N[]): E[];
    hasEdgeConnecting(nodeU: N, nodeV: N): boolean;
    hasEdgeConnecting(endpoints: N[]): boolean;
    inDegree(node: N): number;
    inEdges(node: N): E[];
    incidentNodes(edge: E): N[];
    outDegree(node: N): number;
    outEdges(node: N): E[];
    predecessors(node: N): N[];
    successors(node: N): N[];
}