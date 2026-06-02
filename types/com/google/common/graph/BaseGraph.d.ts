import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { PredecessorsFunction } from '../../../../com/google/common/graph/PredecessorsFunction.d.ts'
import type { SuccessorsFunction } from '../../../../com/google/common/graph/SuccessorsFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BaseGraph<N extends Object | number | string | boolean> extends PredecessorsFunction<N>, SuccessorsFunction<N>, Object{
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