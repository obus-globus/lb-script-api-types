import type { AbstractNetwork } from '../../../../com/google/common/graph/AbstractNetwork.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { MapIteratorCache } from '../../../../com/google/common/graph/MapIteratorCache.d.ts'
import type { NetworkBuilder } from '../../../../com/google/common/graph/NetworkBuilder.d.ts'
import type { NetworkConnections } from '../../../../com/google/common/graph/NetworkConnections.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StandardNetwork<N extends Object | number | string | boolean, E extends Object | number | string | boolean> extends AbstractNetwork<N, E> {
    constructor(builder: NetworkBuilder<N, E>)
    constructor(builder: NetworkBuilder<N, E>, nodeConnections: Map<N, NetworkConnections<N, E>>, edgeToReferenceNode: Map<E, N>)
    // private allowsParallelEdges: boolean;
    // private allowsSelfLoops: boolean;
    // private edgeOrder: ElementOrder<E>;
    // private edgeToReferenceNode: MapIteratorCache<E, N>;
    // private isDirected: boolean;
    // private nodeConnections: MapIteratorCache<N, NetworkConnections<N, E>>;
    // private nodeOrder: ElementOrder<N>;
    adjacentNodes(node: N): N[];
    allowsParallelEdges(): boolean;
    allowsSelfLoops(): boolean;
    checkedConnections(node: N): NetworkConnections<N, E>;
    checkedReferenceNode(edge: E): N;
    containsEdge(edge: E): boolean;
    containsNode(node: N): boolean;
    edgeOrder(): ElementOrder<E>;
    edges(): E[];
    edgesConnecting(nodeU: N, nodeV: N): E[];
    edgesConnecting(endpoints: N[]): E[];
    inEdges(node: N): E[];
    incidentEdges(node: N): E[];
    incidentNodes(edge: E): N[];
    isDirected(): boolean;
    nodeOrder(): ElementOrder<N>;
    nodes(): N[];
    outEdges(node: N): E[];
    predecessors(node: N): N[];
    successors(node: N): N[];
}