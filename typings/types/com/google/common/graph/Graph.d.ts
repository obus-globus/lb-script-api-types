import type { BaseGraph } from '../../../../com/google/common/graph/BaseGraph.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Graph<N extends Object | number | string | boolean> extends BaseGraph<N>, Object{
    adjacentNodes(node: N): N[];
    allowsSelfLoops(): boolean;
    degree(node: N): number;
    edges(): N[][];
    hasEdgeConnecting(nodeU: N, nodeV: N): boolean;
    hasEdgeConnecting(endpoints: N[]): boolean;
    inDegree(node: N): number;
    incidentEdgeOrder(): ElementOrder<N>;
    incidentEdges(node: N): N[][];
    isDirected(): boolean;
    nodeOrder(): ElementOrder<N>;
    nodes(): N[];
    outDegree(node: N): number;
    predecessors(node: N): N[];
    successors(node: N): N[];
}