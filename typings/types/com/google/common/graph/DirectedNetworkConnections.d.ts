import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractDirectedNetworkConnections } from '../../../../com/google/common/graph/AbstractDirectedNetworkConnections.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DirectedNetworkConnections<N extends unknown, E extends unknown> extends AbstractDirectedNetworkConnections<N, E> {
    constructor(inEdgeMap: JavaMap<E, N>, outEdgeMap: JavaMap<E, N>, selfLoopCount: number)
    edgesConnecting(node: N): E[];
    predecessors(): N[];
    successors(): N[];
}