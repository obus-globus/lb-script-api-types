import type { ArchetypeGraph } from '../../../../com/google/common/graph/ArchetypeGraph.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { Network } from '../../../../com/google/common/graph/Network.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BaseGraph<N extends unknown> extends ArchetypeGraph<N>, Object{
    asNetwork(): Network<N, N[]>;
    edges(): N[][];
    incidentEdgeOrder(): ElementOrder<N>;
    incidentEdges(node: N): N[][];
}