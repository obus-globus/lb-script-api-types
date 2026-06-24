import type { AbstractGraphBuilder } from '../../../../com/google/common/graph/AbstractGraphBuilder.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { ImmutableNetwork$Builder } from '../../../../com/google/common/graph/ImmutableNetwork$Builder.d.ts'
import type { MutableNetwork } from '../../../../com/google/common/graph/MutableNetwork.d.ts'
import type { Network } from '../../../../com/google/common/graph/Network.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NetworkBuilder<N extends unknown, E extends unknown> extends AbstractGraphBuilder<N> {
    static directed(): NetworkBuilder<Object, Object>;
    static from(paramnetwork: Network<Object, Object>): NetworkBuilder<Object, Object>;
    static undirected(): NetworkBuilder<Object, Object>;
    private constructor(directed: boolean)
    // private allowsParallelEdges: boolean;
    // private edgeOrder: ElementOrder<E>;
    // private expectedEdgeCount: number;
    allowsParallelEdges(allowsParallelEdges: boolean): NetworkBuilder<N, E>;
    allowsSelfLoops(allowsSelfLoops: boolean): NetworkBuilder<N, E>;
    build<N1 extends N, E1 extends E>(): MutableNetwork<N1, E1>;
    // private cast<N1 extends N, E1 extends E>(): NetworkBuilder<N1, E1>;
    edgeOrder<E1 extends E>(edgeOrder: ElementOrder<E1>): NetworkBuilder<N, E1>;
    expectedEdgeCount(expectedEdgeCount: number): NetworkBuilder<N, E>;
    expectedNodeCount(expectedNodeCount: number): NetworkBuilder<N, E>;
    immutable<N1 extends N, E1 extends E>(): ImmutableNetwork$Builder<N1, E1>;
    nodeOrder<N1 extends N>(nodeOrder: ElementOrder<N1>): NetworkBuilder<N1, E>;
}