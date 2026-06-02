import type { Digraph } from '../../../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { DotAttribute } from '../../../../../../de/odysseus/ithaka/digraph/io/dot/DotAttribute.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DotProvider<V extends Object | number | string | boolean, G extends Digraph<V>> extends Object{
    getDefaultEdgeAttributes(arg0: G): DotAttribute[];
    getDefaultGraphAttributes(arg0: G): DotAttribute[];
    getDefaultNodeAttributes(arg0: G): DotAttribute[];
    getEdgeAttributes(arg0: V, arg1: V, arg2: number): DotAttribute[];
    getNodeAttributes(arg0: V): DotAttribute[];
    getNodeId(arg0: V): string;
    getSubgraphAttributes(arg0: G, arg1: V): DotAttribute[];
}