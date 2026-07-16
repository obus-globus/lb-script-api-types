import type { AbstractGraphBuilder } from '../../../../com/google/common/graph/AbstractGraphBuilder.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { Graph } from '../../../../com/google/common/graph/Graph.d.ts'
import type { ImmutableGraph$Builder } from '../../../../com/google/common/graph/ImmutableGraph$Builder.d.ts'
import type { MutableGraph } from '../../../../com/google/common/graph/MutableGraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GraphBuilder<N extends unknown> extends AbstractGraphBuilder<N> {
    static directed(): GraphBuilder<Object>;
    static from<N extends unknown>(paramgraph: Graph<N>): GraphBuilder<N>;
    static undirected(): GraphBuilder<Object>;
    private constructor(directed: boolean)
    allowsSelfLoops(allowsSelfLoops: boolean): GraphBuilder<N>;
    build<N1 extends N>(): MutableGraph<N1>;
    // private cast<N1 extends N>(): GraphBuilder<N1>;
    copy(): GraphBuilder<N>;
    expectedNodeCount(expectedNodeCount: number): GraphBuilder<N>;
    immutable<N1 extends N>(): ImmutableGraph$Builder<N1>;
    incidentEdgeOrder<N1 extends N>(incidentEdgeOrder: ElementOrder<N1>): GraphBuilder<N1>;
    nodeOrder<N1 extends N>(nodeOrder: ElementOrder<N1>): GraphBuilder<N1>;
}