import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { ImmutableGraph } from '../../../../com/google/common/graph/ImmutableGraph.d.ts'
import type { StandardValueGraph } from '../../../../com/google/common/graph/StandardValueGraph.d.ts'
import type { ValueGraph } from '../../../../com/google/common/graph/ValueGraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableValueGraph<N extends Object | number | string | boolean, V extends Object | number | string | boolean> extends StandardValueGraph<N, V> {
    static copyOf(paramgraph: ImmutableValueGraph<Object, Object>): ImmutableValueGraph<Object, Object>;
    static copyOf(paramgraph: ValueGraph<Object, Object>): ImmutableValueGraph<Object, Object>;
    private constructor(graph: ValueGraph<N, V>)
    asGraph(): ImmutableGraph<N>;
    incidentEdgeOrder(): ElementOrder<N>;
}