import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractUndirectedNetworkConnections } from '../../../../com/google/common/graph/AbstractUndirectedNetworkConnections.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UndirectedNetworkConnections<N extends unknown, E extends unknown> extends AbstractUndirectedNetworkConnections<N, E> {
    constructor(incidentEdgeMap: JavaMap<E, N>)
    adjacentNodes(): N[];
    edgesConnecting(node: N): E[];
}