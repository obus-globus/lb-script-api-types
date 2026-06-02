import type { ForwardingGraph } from '../../../../com/google/common/graph/ForwardingGraph.d.ts'
import type { Graph } from '../../../../com/google/common/graph/Graph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Graphs$TransposedGraph<N extends Object | number | string | boolean> extends ForwardingGraph<N> {
    constructor(graph: Graph<N>)
    // private graph: Graph<N>;
    delegate(): Graph<N>;
    hasEdgeConnecting(nodeU: N, nodeV: N): boolean;
    hasEdgeConnecting(endpoints: N[]): boolean;
    inDegree(node: N): number;
    incidentEdges(node: N): N[][];
    outDegree(node: N): number;
    predecessors(node: N): N[];
    successors(node: N): N[];
}