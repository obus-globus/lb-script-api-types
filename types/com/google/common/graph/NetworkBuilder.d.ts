import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { AbstractGraphBuilder } from '../../../../com/google/common/graph/AbstractGraphBuilder.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { ImmutableNetwork$Builder } from '../../../../com/google/common/graph/ImmutableNetwork$Builder.d.ts'
import type { MutableNetwork } from '../../../../com/google/common/graph/MutableNetwork.d.ts'
import type { Network } from '../../../../com/google/common/graph/Network.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NetworkBuilder<N extends Object | number | string | boolean, E extends Object | number | string | boolean> extends AbstractGraphBuilder<N> {
    static directed(): NetworkBuilder<Object, Object>;
    static from(paramnetwork: Network<Object, Object>): NetworkBuilder<Object, Object>;
    static undirected(): NetworkBuilder<Object, Object>;
    private constructor(directed: boolean)
    // private allowsParallelEdges: boolean;
    // private edgeOrder: ElementOrder<E>;
    // private expectedEdgeCount: Optional<number>;
    allowsParallelEdges(allowsParallelEdges: boolean): NetworkBuilder<N, E>;
    allowsSelfLoops(allowsSelfLoops: boolean): NetworkBuilder<N, E>;
    build(): MutableNetwork<N1, E1>;
    // private cast(): NetworkBuilder<N1, E1>;
    edgeOrder(edgeOrder: ElementOrder<E1>): NetworkBuilder<N, E1>;
    expectedEdgeCount(expectedEdgeCount: number): NetworkBuilder<N, E>;
    expectedNodeCount(expectedNodeCount: number): NetworkBuilder<N, E>;
    immutable(): ImmutableNetwork$Builder<N1, E1>;
    nodeOrder(nodeOrder: ElementOrder<N1>): NetworkBuilder<N1, E>;
}