import type { MutableNetwork } from '../../../../com/google/common/graph/MutableNetwork.d.ts'
import type { NetworkBuilder } from '../../../../com/google/common/graph/NetworkBuilder.d.ts'
import type { NetworkConnections } from '../../../../com/google/common/graph/NetworkConnections.d.ts'
import type { StandardNetwork } from '../../../../com/google/common/graph/StandardNetwork.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StandardMutableNetwork<N extends unknown, E extends unknown> extends StandardNetwork<N, E> implements MutableNetwork<N, E> {
    constructor(builder: NetworkBuilder<N, E>)
    addEdge(nodeU: N, nodeV: N, edge: E): boolean;
    addEdge(endpoints: N[], edge: E): boolean;
    addNode(node: N): boolean;
    // private addNodeInternal(node: N): NetworkConnections<N, E>;
    // private newConnections(): NetworkConnections<N, E>;
    removeEdge(edge: E): boolean;
    removeNode(node: N): boolean;
}