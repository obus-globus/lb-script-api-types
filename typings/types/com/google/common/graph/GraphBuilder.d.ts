import type { AbstractGraphBuilder } from '../../../../com/google/common/graph/AbstractGraphBuilder.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { Graph } from '../../../../com/google/common/graph/Graph.d.ts'
import type { ImmutableGraph$Builder } from '../../../../com/google/common/graph/ImmutableGraph$Builder.d.ts'
import type { MutableGraph } from '../../../../com/google/common/graph/MutableGraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GraphBuilder<N extends Object | number | string | boolean> extends AbstractGraphBuilder<N> {
    static directed(): GraphBuilder<Object>;
    static from(paramgraph: Graph<Object>): GraphBuilder<Object>;
    static undirected(): GraphBuilder<Object>;
    private constructor(directed: boolean)
    allowsSelfLoops(allowsSelfLoops: boolean): GraphBuilder<N>;
    build(): MutableGraph<N1>;
    // private cast(): GraphBuilder<N1>;
    copy(): GraphBuilder<N>;
    expectedNodeCount(expectedNodeCount: number): GraphBuilder<N>;
    immutable(): ImmutableGraph$Builder<N1>;
    incidentEdgeOrder(incidentEdgeOrder: ElementOrder<N1>): GraphBuilder<N1>;
    nodeOrder(nodeOrder: ElementOrder<N1>): GraphBuilder<N1>;
}