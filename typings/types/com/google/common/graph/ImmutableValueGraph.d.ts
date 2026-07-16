import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { ImmutableGraph } from '../../../../com/google/common/graph/ImmutableGraph.d.ts'
import type { StandardValueGraph } from '../../../../com/google/common/graph/StandardValueGraph.d.ts'
import type { ValueGraph } from '../../../../com/google/common/graph/ValueGraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableValueGraph<N extends unknown, V extends unknown> extends StandardValueGraph<N, V> {
    static copyOf<N extends unknown, V extends unknown>(paramgraph: ImmutableValueGraph<N, V>): ImmutableValueGraph<N, V>;
    static copyOf<N extends unknown, V extends unknown>(paramgraph: ValueGraph<N, V>): ImmutableValueGraph<N, V>;
    private constructor(graph: ValueGraph<N, V>)
    asGraph(): ImmutableGraph<N>;
    incidentEdgeOrder(): ElementOrder<N>;
}