import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractGraphBuilder } from '../../../../com/google/common/graph/AbstractGraphBuilder.d.ts'
import type { AbstractValueGraph } from '../../../../com/google/common/graph/AbstractValueGraph.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { GraphConnections } from '../../../../com/google/common/graph/GraphConnections.d.ts'
import type { MapIteratorCache } from '../../../../com/google/common/graph/MapIteratorCache.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StandardValueGraph<N extends unknown, V extends unknown> extends AbstractValueGraph<N, V> {
    constructor(builder: AbstractGraphBuilder<N>)
    constructor(builder: AbstractGraphBuilder<N>, nodeConnections: JavaMap<N, GraphConnections<N, V>>, edgeCount: number)
    // private allowsSelfLoops: boolean;
    // private edgeCount: number;
    // private isDirected: boolean;
    // private nodeConnections: MapIteratorCache<N, GraphConnections<N, V>>;
    // private nodeOrder: ElementOrder<N>;
    adjacentNodes(node: N): N[];
    allowsSelfLoops(): boolean;
    // private checkedConnections(node: N): GraphConnections<N, V>;
    containsNode(node: N): boolean;
    edgeCount(): number;
    edgeValueOrDefault(nodeU: N, nodeV: N, defaultValue: V): V;
    edgeValueOrDefault(endpoints: N[], defaultValue: V): V;
    // private edgeValueOrDefaultInternal(nodeU: N, nodeV: N, defaultValue: V): V;
    hasEdgeConnecting(nodeU: N, nodeV: N): boolean;
    hasEdgeConnecting(endpoints: N[]): boolean;
    // private hasEdgeConnectingInternal(nodeU: N, nodeV: N): boolean;
    incidentEdges(node: N): N[][];
    isDirected(): boolean;
    nodeOrder(): ElementOrder<N>;
    nodes(): N[];
    predecessors(node: N): N[];
    successors(node: N): N[];
}