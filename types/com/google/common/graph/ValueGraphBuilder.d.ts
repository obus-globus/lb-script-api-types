import type { AbstractGraphBuilder } from '../../../../com/google/common/graph/AbstractGraphBuilder.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { ImmutableValueGraph$Builder } from '../../../../com/google/common/graph/ImmutableValueGraph$Builder.d.ts'
import type { MutableValueGraph } from '../../../../com/google/common/graph/MutableValueGraph.d.ts'
import type { ValueGraph } from '../../../../com/google/common/graph/ValueGraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ValueGraphBuilder<N extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractGraphBuilder<N> {
    static directed(): ValueGraphBuilder<Object, Object>;
    static from(paramgraph: ValueGraph<Object, Object>): ValueGraphBuilder<Object, Object>;
    static undirected(): ValueGraphBuilder<Object, Object>;
    private constructor(directed: boolean)
    allowsSelfLoops(allowsSelfLoops: boolean): ValueGraphBuilder<N, V>;
    build(): MutableValueGraph<N1, V1>;
    // private cast(): ValueGraphBuilder<N1, V1>;
    copy(): ValueGraphBuilder<N, V>;
    expectedNodeCount(expectedNodeCount: number): ValueGraphBuilder<N, V>;
    immutable(): ImmutableValueGraph$Builder<N1, V1>;
    incidentEdgeOrder(incidentEdgeOrder: ElementOrder<N1>): ValueGraphBuilder<N1, V>;
    nodeOrder(nodeOrder: ElementOrder<N1>): ValueGraphBuilder<N1, V>;
}