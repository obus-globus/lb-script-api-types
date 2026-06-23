import type { GraphBuilder } from '../../../../com/google/common/graph/GraphBuilder.d.ts'
import type { ImmutableGraph } from '../../../../com/google/common/graph/ImmutableGraph.d.ts'
import type { MutableGraph } from '../../../../com/google/common/graph/MutableGraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableGraph$Builder<N extends unknown> extends Object {
    constructor(graphBuilder: GraphBuilder<N>)
    // private mutableGraph: MutableGraph<N>;
    addNode(node: N): ImmutableGraph$Builder<N>;
    build(): ImmutableGraph<N>;
    putEdge(nodeU: N, nodeV: N): ImmutableGraph$Builder<N>;
    putEdge(endpoints: N[]): ImmutableGraph$Builder<N>;
}