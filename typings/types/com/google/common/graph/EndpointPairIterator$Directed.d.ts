import type { BaseGraph } from '../../../../com/google/common/graph/BaseGraph.d.ts'
import type { EndpointPairIterator } from '../../../../com/google/common/graph/EndpointPairIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EndpointPairIterator$Directed<N extends unknown> extends EndpointPairIterator<N> {
    private constructor(graph: BaseGraph<N>)
    computeNext(): N[];
}