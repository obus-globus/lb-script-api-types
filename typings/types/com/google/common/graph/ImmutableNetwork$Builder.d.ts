import type { ImmutableNetwork } from '../../../../com/google/common/graph/ImmutableNetwork.d.ts'
import type { MutableNetwork } from '../../../../com/google/common/graph/MutableNetwork.d.ts'
import type { NetworkBuilder } from '../../../../com/google/common/graph/NetworkBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableNetwork$Builder<N extends unknown, E extends unknown> extends Object {
    constructor(networkBuilder: NetworkBuilder<N, E>)
    // private mutableNetwork: MutableNetwork<N, E>;
    addEdge(nodeU: N, nodeV: N, edge: E): ImmutableNetwork$Builder<N, E>;
    addEdge(endpoints: N[], edge: E): ImmutableNetwork$Builder<N, E>;
    addNode(node: N): ImmutableNetwork$Builder<N, E>;
    build(): ImmutableNetwork<N, E>;
}