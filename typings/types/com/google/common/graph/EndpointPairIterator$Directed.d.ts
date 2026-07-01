import type { BaseGraph } from '../../../../com/google/common/graph/BaseGraph.d.ts'
import type { EndpointPairIterator } from '../../../../com/google/common/graph/EndpointPairIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EndpointPairIterator$Directed<N extends unknown> extends EndpointPairIterator<N> {
    constructor(arg0: BaseGraph<Object>, arg1: any)
    computeNext(): N[];
}