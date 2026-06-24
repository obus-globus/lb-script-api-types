import type { EndpointPairIterator$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { BaseGraph } from '../../../../com/google/common/graph/BaseGraph.d.ts'
import type { EndpointPairIterator } from '../../../../com/google/common/graph/EndpointPairIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EndpointPairIterator$Directed<N extends unknown> extends EndpointPairIterator<N> {
    constructor(arg0: BaseGraph<Object>, arg1: EndpointPairIterator$1)
    private constructor(graph: BaseGraph<N>)
    computeNext(): N[];
}