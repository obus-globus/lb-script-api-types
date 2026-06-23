import type { ImmutableGraph } from '../../../../com/google/common/graph/ImmutableGraph.d.ts'
import type { Network } from '../../../../com/google/common/graph/Network.d.ts'
import type { StandardNetwork } from '../../../../com/google/common/graph/StandardNetwork.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableNetwork<N extends unknown, E extends unknown> extends StandardNetwork<N, E> {
    static copyOf(paramnetwork: ImmutableNetwork<Object, Object>): ImmutableNetwork<Object, Object>;
    static copyOf(paramnetwork: Network<Object, Object>): ImmutableNetwork<Object, Object>;
    private constructor(network: Network<N, E>)
    asGraph(): ImmutableGraph<N>;
}