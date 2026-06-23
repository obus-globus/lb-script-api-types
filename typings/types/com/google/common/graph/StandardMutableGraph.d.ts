import type { AbstractGraphBuilder } from '../../../../com/google/common/graph/AbstractGraphBuilder.d.ts'
import type { BaseGraph } from '../../../../com/google/common/graph/BaseGraph.d.ts'
import type { ForwardingGraph } from '../../../../com/google/common/graph/ForwardingGraph.d.ts'
import type { GraphConstants$Presence } from '../../../../com/google/common/graph/GraphConstants$Presence.d.ts'
import type { MutableGraph } from '../../../../com/google/common/graph/MutableGraph.d.ts'
import type { MutableValueGraph } from '../../../../com/google/common/graph/MutableValueGraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StandardMutableGraph<N extends unknown> extends ForwardingGraph<N> implements MutableGraph<N> {
    constructor(builder: AbstractGraphBuilder<N>)
    // private backingValueGraph: MutableValueGraph<N, GraphConstants$Presence>;
    addNode(node: N): boolean;
    delegate(): BaseGraph<N>;
    putEdge(nodeU: N, nodeV: N): boolean;
    putEdge(endpoints: N[]): boolean;
    removeEdge(nodeU: N, nodeV: N): boolean;
    removeEdge(endpoints: N[]): boolean;
    removeNode(node: N): boolean;
}