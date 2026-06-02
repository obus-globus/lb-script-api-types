import type { Graph } from '../../../../com/google/common/graph/Graph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class GraphsBridgeMethods extends Object {
    static reachableNodes(paramgraph: Graph<Object>, paramnode: Object | null): (Object | null)[];
    static transitiveClosure(paramgraph: Graph<Object>): Graph<Object>;
    constructor()
}