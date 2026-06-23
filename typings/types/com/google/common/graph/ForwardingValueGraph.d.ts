import type { AbstractValueGraph } from '../../../../com/google/common/graph/AbstractValueGraph.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { ValueGraph } from '../../../../com/google/common/graph/ValueGraph.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ForwardingValueGraph<N extends unknown, V extends unknown> extends AbstractValueGraph<N, V> {
    constructor()
    adjacentNodes(node: N): N[];
    allowsSelfLoops(): boolean;
    degree(node: N): number;
    delegate(): ValueGraph<N, V>;
    edgeCount(): number;
    edgeValue(nodeU: N, nodeV: N): Optional<V>;
    edgeValue(endpoints: N[]): Optional<V>;
    edgeValueOrDefault(nodeU: N, nodeV: N, defaultValue: V): V;
    edgeValueOrDefault(endpoints: N[], defaultValue: V): V;
    hasEdgeConnecting(nodeU: N, nodeV: N): boolean;
    hasEdgeConnecting(endpoints: N[]): boolean;
    inDegree(node: N): number;
    incidentEdgeOrder(): ElementOrder<N>;
    isDirected(): boolean;
    nodeOrder(): ElementOrder<N>;
    nodes(): N[];
    outDegree(node: N): number;
    predecessors(node: N): N[];
    successors(node: N): N[];
}