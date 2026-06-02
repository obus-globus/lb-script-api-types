import type { AbstractDirectedNetworkConnections } from '../../../../com/google/common/graph/AbstractDirectedNetworkConnections.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DirectedNetworkConnections<N extends Object | number | string | boolean, E extends Object | number | string | boolean> extends AbstractDirectedNetworkConnections<N, E> {
    constructor(inEdgeMap: Map<E, N>, outEdgeMap: Map<E, N>, selfLoopCount: number)
    edgesConnecting(node: N): E[];
    predecessors(): N[];
    successors(): N[];
}