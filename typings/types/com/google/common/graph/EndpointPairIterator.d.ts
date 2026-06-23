import type { AbstractIterator } from '../../../../com/google/common/collect/AbstractIterator.d.ts'
import type { BaseGraph } from '../../../../com/google/common/graph/BaseGraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class EndpointPairIterator<N extends unknown> extends AbstractIterator<N[]> {
    private constructor(graph: BaseGraph<N>)
    // private graph: BaseGraph<N>;
    // private node: N;
    // private nodeIterator: Iterator<N>;
    // private successorIterator: Iterator<N>;
    advance(): boolean;
}