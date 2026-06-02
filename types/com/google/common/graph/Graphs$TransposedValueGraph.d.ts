import type { ForwardingValueGraph } from '../../../../com/google/common/graph/ForwardingValueGraph.d.ts'
import type { ValueGraph } from '../../../../com/google/common/graph/ValueGraph.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Graphs$TransposedValueGraph<N extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ForwardingValueGraph<N, V> {
    constructor(graph: ValueGraph<N, V>)
    // private graph: ValueGraph<N, V>;
    delegate(): ValueGraph<N, V>;
    edgeValue(nodeU: N, nodeV: N): Optional<V>;
    edgeValue(endpoints: N[]): Optional<V>;
    edgeValueOrDefault(nodeU: N, nodeV: N, defaultValue: V): V;
    edgeValueOrDefault(endpoints: N[], defaultValue: V): V;
    hasEdgeConnecting(nodeU: N, nodeV: N): boolean;
    hasEdgeConnecting(endpoints: N[]): boolean;
    inDegree(node: N): number;
    outDegree(node: N): number;
    predecessors(node: N): N[];
    successors(node: N): N[];
}