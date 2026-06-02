import type { AbstractUndirectedNetworkConnections } from '../../../../com/google/common/graph/AbstractUndirectedNetworkConnections.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UndirectedNetworkConnections<N extends Object | number | string | boolean, E extends Object | number | string | boolean> extends AbstractUndirectedNetworkConnections<N, E> {
    constructor(incidentEdgeMap: Map<E, N>)
    adjacentNodes(): N[];
    edgesConnecting(node: N): E[];
}