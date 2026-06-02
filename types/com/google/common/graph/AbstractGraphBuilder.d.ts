import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractGraphBuilder<N extends Object | number | string | boolean> extends Object {
    constructor(directed: boolean)
    // private allowsSelfLoops: boolean;
    // private directed: boolean;
    // private expectedNodeCount: Optional<number>;
    // private incidentEdgeOrder: ElementOrder<N>;
    // private nodeOrder: ElementOrder<N>;
}