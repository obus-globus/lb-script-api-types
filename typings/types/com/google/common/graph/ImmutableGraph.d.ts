import type { BaseGraph } from '../../../../com/google/common/graph/BaseGraph.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { ForwardingGraph } from '../../../../com/google/common/graph/ForwardingGraph.d.ts'
import type { Graph } from '../../../../com/google/common/graph/Graph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableGraph<N extends unknown> extends ForwardingGraph<N> {
    static copyOf<N extends unknown>(paramgraph: Graph<N>): ImmutableGraph<N>;
    static copyOf<N extends unknown>(paramgraph: ImmutableGraph<N>): ImmutableGraph<N>;
    constructor(backingGraph: BaseGraph<N>)
    // private backingGraph: BaseGraph<N>;
    delegate(): BaseGraph<N>;
    incidentEdgeOrder(): ElementOrder<N>;
}