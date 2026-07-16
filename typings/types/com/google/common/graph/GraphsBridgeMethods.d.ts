import type { Graph } from '../../../../com/google/common/graph/Graph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class GraphsBridgeMethods extends Object {
    static reachableNodes<N extends unknown>(paramgraph: Graph<N>, paramnode: N): N[];
    static transitiveClosure<N extends unknown>(paramgraph: Graph<N>): Graph<N>;
    constructor()
}