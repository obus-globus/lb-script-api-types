import type { ImmutableValueGraph } from '../../../../com/google/common/graph/ImmutableValueGraph.d.ts'
import type { MutableValueGraph } from '../../../../com/google/common/graph/MutableValueGraph.d.ts'
import type { ValueGraphBuilder } from '../../../../com/google/common/graph/ValueGraphBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableValueGraph$Builder<N extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    constructor(graphBuilder: ValueGraphBuilder<N, V>)
    // private mutableValueGraph: MutableValueGraph<N, V>;
    addNode(node: N): ImmutableValueGraph$Builder<N, V>;
    build(): ImmutableValueGraph<N, V>;
    putEdgeValue(nodeU: N, nodeV: N, value: V): ImmutableValueGraph$Builder<N, V>;
    putEdgeValue(endpoints: N[], value: V): ImmutableValueGraph$Builder<N, V>;
}